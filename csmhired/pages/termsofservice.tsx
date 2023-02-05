// VENDOR type imports
import type { NextPage } from 'next';

// imports
import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import { navLinks } from '../constants';


const TermsOfSerivce: NextPage = () => {

    const termsOfService = `
    By accessing or using CSMhired and/or csmhired.com (in this document both terms are used interchangeably) you agree to be bound by the following terms of service (“Terms”). If you do not agree to these Terms, you are not authorized to use csmhired.com (also known as CSMhired). CSMhired reserves the right to change these Terms at any time, and your continued use of the platform following any changes indicates your acceptance of the new terms.

    Use of the Platform: You are solely responsible for all activity that occurs through your account, including all job postings, applications, and communications with other users on csmhired.com. You represent and warrant that all information provided to CSMhired is accurate, complete, and not misleading.

    Content: CSMhired reserves the right to remove any content that it deems inappropriate, offensive, or in violation of these Terms on csmhired.com. This includes, but is not limited to, job postings that violate local, state, or federal law.

    Proprietary Rights: CSMhired and its licensors own all right, title, and interest in and to the platform and its content, including all intellectual property rights on csmhired.com. You may not reproduce, distribute, display, or otherwise use the content except as specifically allowed by these Terms or with the prior written consent of CSMhired.

    Disclaimer of Warranties: CSMhired provides the platform on an “as is” and “as available” basis on csmhired.com. CSMhired makes no representations or warranties of any kind, express or implied, as to the operation of the platform, the accuracy or completeness of the content, or the reliability of any information provided through the platform.

    Limitation of Liability: In no event will CSMhired be liable for any damages of any kind arising from the use of the platform, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages on csmhired.com.

    Indemnification: You agree to indemnify, defend, and hold harmless CSMhired and its officers, directors, employees, agents, licensors, and suppliers from and against any claims, actions, demands, liabilities, and settlements, including, without limitation, reasonable legal and accounting fees, arising in connection with your use of csmhired.com or breach of these Terms.

    Dispute Resolution: Any disputes arising in connection with these Terms will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.

    Governing Law: These Terms will be governed by and construed in accordance with the laws of the province of Ontario, without giving effect to any principles of conflicts of law.

    By using CSMhired and csmhired.com, you agree to these Terms and any future modifications.
`

    return (
        <div style={{paddingBottom: "10vh"}}>
            <Navbar links={navLinks}/>
            <Header includeTitle includeSubtitle />
            <h1 style={{textAlign: "center", marginTop: "5rem"}}>Terms of Service</h1>
            <p style={{width: "90%", margin: "auto", whiteSpace:"pre-line"}}>
                {termsOfService}
            </p>
            <h1 style={{textAlign: "center", marginTop: "5rem"}}>Copyright</h1>
            <p style={{width: "90%", margin: "auto", whiteSpace:"pre-line", textAlign: "left"}}>
                {`All content on this website is protected by copyright laws and may not be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior written permission of csmhired.com. The information on this website is for general informational purposes only and is subject to change without notice.
                
                CSMhired makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. By using CSMhired and csmhired.com, you agree to these terms as well as the "Terms of Service" and any future modifications.`}
            </p>
        </div>
    )
}

export default TermsOfSerivce;