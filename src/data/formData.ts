// Types for the form data structure

export interface FormField {
  id: string;
  type: 'text' | 'radio' | 'checkbox' | 'image';
  label: string;
  description?: string;
  required: boolean;
  value: any;
  options?: { 
    value: string; 
    label: string;
    conditionalField?: {
      type: 'text' | 'email' | 'tel';
      placeholder?: string;
      value?: string;
    };
  }[];
  prefilled?: boolean;
  allowOther?: boolean;
  otherValue?: string;
  placeholder?: string;
  illustration?: string;
  socialProof?: string;
}

export interface FormSection {
  id: string;
  title: string;
  description?: string;
  transitionMessage?: string;
  fields: {
    [key: string]: FormField;
  };
}

export interface FormData {
  [key: string]: FormSection;
}

// Initial form data
export const initialFormData: FormData = {
  personalInfo: {
    id: 'personalInfo',
    title: 'Welcome, Jane! Let\'s Set Up Your Thrive Profile',
    description: 'We\'ve done the heavy lifting—now add your personal touch so we can serve you even better.',
    fields: {
      profilePicture: {
        id: 'profilePicture',
        type: 'image',
        label: 'Show us that winning smile 😄',
        required: false,
        value: '',
        socialProof: 'Uploading a photo makes your dashboard feel like home.'
      },
      fullName: {
        id: 'fullName',
        type: 'text',
        label: 'Your full name is:',
        required: true,
        value: 'Jane Smith',
        prefilled: true,
        socialProof: 'We\'ll greet you exactly the way you like—just tweak it if needed.'
      },
      address: {
        id: 'address',
        type: 'text',
        label: 'Your home address is:',
        required: true,
        value: '123 Main St, Anytown, CA 12345',
        prefilled: true,
        socialProof: 'Confirm your address so our tips and local resources are spot-on.',
        illustration: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
      },
      language: {
        id: 'language',
        type: 'radio',
        label: 'Which language feels most comfortable for you?',
        description: 'We want to communicate in the way that works best for you.',
        required: true,
        value: '',
        options: [
          { 
            value: 'english', 
            label: 'English',
            conditionalField: {
              type: 'text',
              placeholder: 'Preferred dialect (if any)'
            }
          },
          { 
            value: 'spanish', 
            label: 'Español',
            conditionalField: {
              type: 'text',
              placeholder: 'Dialecto preferido (si aplica)'
            }
          },
          { 
            value: 'french', 
            label: 'Français',
            conditionalField: {
              type: 'text',
              placeholder: 'Dialecte préféré (si applicable)'
            }
          },
          { 
            value: 'chinese', 
            label: '中文',
            conditionalField: {
              type: 'text',
              placeholder: '首选方言（如果有）'
            }
          },
          { 
            value: 'other', 
            label: 'Other language' 
          }
        ],
        allowOther: true,
        otherValue: '',
        socialProof: 'Many members find they feel more at ease when communicating in their preferred language.',
        illustration: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg'
      },
      notifications: {
        id: 'notifications',
        type: 'checkbox',
        label: 'How would you prefer to receive helpful notifications?',
        required: true,
        value: [],
        options: [
          { 
            value: 'text', 
            label: 'Text message',
            conditionalField: {
              type: 'tel',
              placeholder: 'Enter your mobile number'
            }
          },
          { 
            value: 'email', 
            label: 'Email',
            conditionalField: {
              type: 'email',
              placeholder: 'Enter your email address'
            }
          },
          { value: 'app', label: 'Mobile app notifications' },
          { value: 'phone', label: 'Phone call' }
        ]
      }
    }
  },
  homeInfo: {
    id: 'homeInfo',
    title: '2. Tell Us About Your Home',
    description: 'Your home is uniquely yours. Help us understand what makes it special.',
    fields: {
      homeType: {
        id: 'homeType',
        type: 'radio',
        label: 'What type of place do you call home?',
        required: true,
        value: '',
        options: [
          { value: 'house', label: 'House with character' },
          { value: 'apartment', label: 'Apartment/Condo' },
          { value: 'assisted', label: 'Assisted Living' },
          { value: 'other', label: 'Something else' }
        ],
        allowOther: true,
        otherValue: '',
        illustration: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
      },
      homeLevels: {
        id: 'homeLevels',
        type: 'radio',
        label: 'Your home has:',
        required: true,
        value: '',
        options: [
          { value: 'one', label: 'Just one level (no stairs to climb)' },
          { value: 'two', label: 'Two levels' },
          { value: 'three', label: 'Three or more levels' }
        ]
      },
      mostUsedSpaces: {
        id: 'mostUsedSpaces',
        type: 'checkbox',
        label: 'Which three spaces in your home do you spend the most time enjoying?',
        required: true,
        value: [],
        options: [
          { value: 'kitchen', label: 'Kitchen' },
          { value: 'living', label: 'Living Room' },
          { value: 'bedroom', label: 'Bedroom' },
          { value: 'bathroom', label: 'Bathroom' },
          { value: 'office', label: 'Office/Den' },
          { value: 'outdoor', label: 'Outdoor space' },
          { value: 'other', label: 'Other special place' }
        ],
        allowOther: true,
        otherValue: ''
      },
      household: {
        id: 'household',
        type: 'radio',
        label: 'Who shares your home journey with you?',
        required: true,
        value: '',
        options: [
          { value: 'independent', label: 'I\'m enjoying independent living' },
          { value: 'partner', label: 'I share my home with my spouse/partner' },
          { value: 'family', label: 'I live with family member(s)' },
          { value: 'roommates', label: 'I share space with roommate(s)/friend(s)' },
          { value: 'other', label: 'Other arrangement' }
        ],
        allowOther: true,
        otherValue: '',
        socialProof: 'Understanding your household helps us tailor our recommendations to support everyone\'s needs.'
      }
    }
  },
  movementInfo: {
    id: 'movementInfo',
    title: '3. Your Movement Patterns',
    description: 'Everyone moves through their home differently. Tell us about your unique style.',
    fields: {
      recentFalls: {
        id: 'recentFalls',
        type: 'radio',
        label: 'Have you experienced any unexpected falls at home recently (past 6 months)?',
        required: true,
        value: '',
        options: [
          { value: 'none', label: 'No falls' },
          { value: 'once', label: 'Yes, once' },
          { value: 'multiple', label: 'Yes, more than once' }
        ]
      },
      mobilityAids: {
        id: 'mobilityAids',
        type: 'radio',
        label: 'Do you use any tools to help with getting around?',
        required: true,
        value: '',
        options: [
          { value: 'none', label: 'Moving freely without aids' },
          { value: 'cane', label: 'A cane for extra stability' },
          { value: 'walker', label: 'A walker or rollator' },
          { value: 'wheelchair', label: 'A wheelchair for mobility' },
          { value: 'other', label: 'Other helpful tools' }
        ],
        allowOther: true,
        otherValue: '',
        illustration: 'https://images.pexels.com/photos/7551665/pexels-photo-7551665.jpeg'
      },
      strengths: {
        id: 'strengths',
        type: 'checkbox',
        label: 'Which movements do you handle with ease?',
        required: true,
        value: [],
        options: [
          { value: 'walking', label: 'Walking across rooms' },
          { value: 'chairs', label: 'Getting in/out of chairs' },
          { value: 'bathroom', label: 'Using the bathroom independently' },
          { value: 'stairs', label: 'Navigating stairs' },
          { value: 'reaching', label: 'Reaching items on shelves' },
          { value: 'bending', label: 'Bending to pick up items' },
          { value: 'meals', label: 'Preparing meals' }
        ],
        socialProof: 'Building on your strengths helps create a more confident and comfortable living experience.'
      }
    }
  },
  wellbeingInfo: {
    id: 'wellbeingInfo',
    title: '4. Your Well-Being',
    description: 'Tell us about your energy and health to help us create recommendations that match your lifestyle.',
    fields: {
      energyLevel: {
        id: 'energyLevel',
        type: 'radio',
        label: 'How would you describe your energy level most days?',
        required: true,
        value: '',
        options: [
          { value: 'vibrant', label: 'Vibrant and energetic' },
          { value: 'good', label: 'Generally good' },
          { value: 'steady', label: 'Steady and consistent' },
          { value: 'variable', label: 'Variable depending on the day' },
          { value: 'conserving', label: 'Conserving energy for what matters' }
        ],
        illustration: 'https://images.pexels.com/photos/7551754/pexels-photo-7551754.jpeg'
      },
      medicationEffects: {
        id: 'medicationEffects',
        type: 'radio',
        label: 'Do any of your medications sometimes affect your balance or alertness?',
        required: true,
        value: '',
        options: [
          { value: 'none', label: 'No effects noticed' },
          { value: 'morning', label: 'Sometimes in the morning' },
          { value: 'evening', label: 'Sometimes in the evening' },
          { value: 'various', label: 'At various times throughout the day' }
        ]
      }
    }
  },
  safetyInfo: {
    id: 'safetyInfo',
    title: '5. Home Safety Features',
    description: 'Tell us about your home\'s current safety features and areas where you would like additional support.',
    fields: {
      safetyFeatures: {
        id: 'safetyFeatures',
        type: 'checkbox',
        label: 'Which helpful safety features are already part of your home?',
        required: true,
        value: [],
        options: [
          { value: 'grab_bars', label: 'Bathroom grab bars for stability' },
          { value: 'handrails', label: 'Sturdy handrails on stairs' },
          { value: 'smoke_detectors', label: 'Working smoke detectors' },
          { value: 'emergency_system', label: 'Emergency response system' },
          { value: 'lighting', label: 'Strategic lighting' },
          { value: 'nonslip', label: 'Non-slip flooring or mats' }
        ],
        illustration: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
      },
      peaceMindAreas: {
        id: 'peaceMindAreas',
        type: 'checkbox',
        label: 'Which aspects of home life would you like additional peace of mind about?',
        required: true,
        value: [],
        options: [
          { value: 'falls', label: 'Moving confidently without falls' },
          { value: 'fire', label: 'Fire safety' },
          { value: 'security', label: 'Home security' },
          { value: 'medication', label: 'Medication management' },
          { value: 'emergency', label: 'Emergency communication' }
        ],
        socialProof: 'Many members find that addressing these areas significantly increases their confidence at home.'
      }
    }
  }
};