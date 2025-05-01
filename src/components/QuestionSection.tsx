import React from 'react';
import { FormField, FormSection } from '../data/formData';
import { TextField } from './TextField';
import { RadioGroup } from './RadioGroup';
import { CheckboxGroup } from './CheckboxGroup';
import { ImageUpload } from './ImageUpload';
import { QuestionCard } from './QuestionCard';
import { SectionTransition } from './SectionTransition';
import { useQuestionnaire } from '../context/QuestionnaireContext';

interface QuestionSectionProps {
  section: FormSection;
}

export const QuestionSection = ({ section }: QuestionSectionProps) => {
  const { updateFormData, updateOtherValue, updateConditionalField } = useQuestionnaire();
  
  const renderField = (fieldId: string, field: FormField) => {
    switch (field.type) {
      case 'text':
        return (
          <QuestionCard
            required={field.required}
            illustration={field.illustration}
            socialProof={field.socialProof}
          >
            <TextField
              id={fieldId}
              label={field.label}
              value={field.value}
              onChange={(value) => updateFormData(section.id, fieldId, value)}
              required={field.required}
              prefilled={field.prefilled}
              placeholder={field.placeholder}
            />
          </QuestionCard>
        );
      
      case 'radio':
        return (
          <QuestionCard
            required={field.required}
            illustration={field.illustration}
            socialProof={field.socialProof}
          >
            <RadioGroup
              id={fieldId}
              label={field.label}
              options={field.options || []}
              value={field.value}
              onChange={(value) => updateFormData(section.id, fieldId, value)}
              required={field.required}
            />
          </QuestionCard>
        );
      
      case 'checkbox':
        return (
          <QuestionCard
            required={field.required}
            illustration={field.illustration}
            socialProof={field.socialProof}
          >
            <CheckboxGroup
              id={fieldId}
              label={field.label}
              options={field.options || []}
              values={field.value}
              onChange={(values) => updateFormData(section.id, fieldId, values)}
              onConditionalChange={(optionValue, value) => 
                updateConditionalField(section.id, fieldId, optionValue, value)
              }
              required={field.required}
              allowOther={field.allowOther}
              otherValue={field.otherValue || ''}
              onOtherChange={(value) => updateOtherValue(section.id, fieldId, value)}
            />
          </QuestionCard>
        );
      
      case 'image':
        return (
          <QuestionCard
            required={field.required}
            socialProof={field.socialProof}
          >
            <ImageUpload
              label={field.label}
              value={field.value}
              onChange={(value) => updateFormData(section.id, fieldId, value)}
              required={field.required}
            />
          </QuestionCard>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="mb-8 animate-fadeIn">
      {section.transitionMessage && (
        <SectionTransition message={section.transitionMessage} />
      )}
      
      {Object.entries(section.fields).map(([fieldId, field]) => (
        <React.Fragment key={fieldId}>
          {renderField(fieldId, field)}
        </React.Fragment>
      ))}
    </div>
  );
}