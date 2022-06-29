import React from 'react';
import Header from '../Header/Header';
import './Instruction.css';

const Instructions = () => {
    return (
        <div>
            <Header></Header>
        <div>
            <h1>Medicine Related Instructions :</h1>
            <h3 className='headT'>
            Be Well-Informed about the Medication</h3>
            <h5>
            Be sure to first know the components that make up the particular drug you are about to intake. When prescribed, ask your physician and double check with the pharmacist providing pharmacy services in Riverview, Florida to make sure that there are no ingredients in the drug that may cause an allergic reaction on your part, or worse, cause nasty side-effects. If your pharmacy offers compounding services, request for a specialized medication compounded to suit your needs and preferences.
            </h5>
            <h3 className='headT'>Always Check the Label and Expiry Date</h3>
            <h5>
            When receiving the medication that you need, before leaving the pharmacy, be sure to check the labels in your medication for the expiry date. Some components of the drug may de-stabilize after a certain period of time and may cause complications, or the drug simply will not work as it should be. Labels should also be checked to make sure that you got the right milligrams dosage.
            </h5>
            <h3 className='headT'>Inquire on a Generic Drug</h3>
            <h5>
            Prescribed medicines can be fairly expensive because most of these are branded. Ask your pharmacist, then, if a generic substitute is available for the prescribed drug. The generic medication contains the same components as that of your prescribed medicine only that it is not branded, and will, therefore, come at a lower cost—helping you with your budget. Generic medicines are regulated by the government, however, so you are sure to get only safe, effective drugs.
            </h5>


        </div>
        </div>
    );
};

export default Instructions;