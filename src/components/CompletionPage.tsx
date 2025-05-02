import React from 'react'
import { useQuestionnaire } from '../context/QuestionnaireContext'
import { default_api } from '../util/api'

import { Button } from './Button'
interface CompletionPageProps {
  onReset: () => void
}

const generateContactSummary = async (formData) => {
  const fullName = formData.personalInfo.fields.fullName.value
  const address = formData.personalInfo.fields.address.value

  const prompt = `Generate a personalized and engaging introduction for a new member of SeniorThrive, based on the following information: 
    Full Name: ${fullName}
    Address: ${address}
    Make it short and in a nice tone.
  `

  const result = await default_api.get_llm_response(prompt = prompt)
  return result.response
}


export const CompletionPage = ({ onReset }: CompletionPageProps) => {
  const { formData, isComplete } = useQuestionnaire()
  const firstName = formData.personalInfo.fields.fullName.value.split(' ')[0];
  const addressSummary = formData.personalInfo.fields.address.value;
  const contactSummary = generateContactSummary(formData);


  if (!isComplete) {
    return <div className="text-center py-10">Please fill out the form</div>;
  }

  return (
    <div className="max-w-2xl mx-auto text-center py-10 px-4">
      <section id="thank-you">
        <h1>
          Thank you, {firstName}! 🎉
        </h1>
        <p>
          Your SeniorThrive journey starts now. We’re already crunching the
          numbers to build a custom Thrive Profile for you and your home.
        </p>
      </section>
      <section id="snapshot">
        <h2>Here’s Your Snapshot</h2>
        <ul>
          <li>
            <strong>Name:</strong> {contactSummary}
          </li>
          <li>
            <strong>Address:</strong> {addressSummary}
          </li>
        </ul>
      </section>
      <section id="next-steps">
        <h2>What Happens Next</h2>
        <p>
          You’ve unlocked the power of your Thrive Profile—here’s how we put it to
          work:
        </p>
      </section>
    </div>
  )
}