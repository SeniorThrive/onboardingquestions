import React, { useState } from 'react';
import { TextField } from './TextField';
import { ImageUpload } from './ImageUpload';
import { useQuestionnaire } from '../context/QuestionnaireContext';
  
interface ProfileConfirmationScreenProps {
    goToNextStep: () => void;
}

export const ProfileConfirmationScreen = ({ goToNextStep }: ProfileConfirmationScreenProps) => {
  const { formData, updateFormData } = useQuestionnaire();  

  const [localFormData, setLocalFormData] = useState({
    fullName: formData.personalInfo.fields.fullName.value,
    preferredName: formData.personalInfo.fields.preferredName.value,
    address: formData.personalInfo.fields.address.value,
    profilePicture: formData.personalInfo.fields.profilePicture.value,
  });

  const handleInputChange = (fieldId: string, value: string) => {
    setLocalFormData((prevData) => ({
      ...prevData,
      [fieldId]: value,
    }));
  };

  const handleConfirm = () => {
    updateFormData('personalInfo', 'fullName', localFormData.fullName);
    updateFormData('personalInfo', 'preferredName', localFormData.preferredName);
    updateFormData('personalInfo', 'address', localFormData.address);
    updateFormData('personalInfo', 'profilePicture', localFormData.profilePicture);
    goToNextStep();
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">ThriveVision Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
            <ImageUpload
                label="Profile Picture"
                value={localFormData.profilePicture}
                onChange={(value) => handleInputChange('profilePicture', value)}
                required={false}
            />
        </div>

        <div className="col-span-1 space-y-4">
          <TextField
            id="fullName"
            label="Full Name"
            value={localFormData.fullName}
            onChange={(value) => handleInputChange('fullName', value)}
            required={true}
          />

          <TextField
            id="preferredName"
            label="Preferred Name"
            value={localFormData.preferredName}
            onChange={(value) => handleInputChange('preferredName', value)}
            required={false}
          />

          <TextField
            id="address"
            label="Address"
            value={localFormData.address}
            onChange={(value) => handleInputChange('address', value)}
            required={true}
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleConfirm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Confirm Information
        </button>
      </div>
    </div>
  );
};