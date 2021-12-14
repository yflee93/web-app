import React from "react";
import {useNavigate} from "react-router";

const Privacy = () => {
    const navigate = useNavigate();
    return (
        <section className="container my-4">
            <h3>Privacy Notice</h3>
            <div>Last updated December 13, 2021</div>
            <hr/>
            <p>
                Thank you for choosing to be part of our community at Movie Pal (“Company,” “we”, “us,” or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at boxi.z.chen@gmail.com.
            </p>
            <p>
                This privacy notice describes how we might use your information if you:
                <ul>
                    <li>
                        Visit our website at https://relaxed-shockley-d947ce.netlify.app
                    </li>
                    <li>
                        Engage with us in other related ways – including any sales, marketing, or events
                        In this privacy notice, if we refer to:
                    </li>
                    <li>
                        “Website,” we are referring to any website of ours that references or links to this policy
                    </li>
                    <li>
                        “Services, we are referring to our Website, and other related services, including any sales, marketing, or events
                    </li>
                </ul>
            </p>
            <p>
                The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it, if there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
            </p>
            <p>
                Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.
            </p>
            <h5>WHAT INFORMATION DO WE COLLECT?</h5>
            <p>In short: We collect personal information that you provide to us.
            </p>
            <p>
                We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website (such as by posting reviews or articles) or otherwise when you contact us.
            </p>
            <p>
                The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:
            </p>
            <p>
                Personal Information Provided by You. We collect email addresses; usernames; passwords; and other similar information.
            </p>
            <h5>
                HOW DO WE USE YOUR INFORMATION?
            </h5>
            <p>
                In short: We process your information for purposes based on the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
            </p>
            <p>
                We use the information we collect or receive:
                <ul>
                    <li>
                        To facilitate account creation and logon process.
                    </li>
                    <li>
                        Request feedback. We may use your information to request feedback and to contact you about your use of our Website.
                    </li>
                    <li>
                        To enable user-to-user communications. We may use your information in order to enable user-to-user communications with each user’s consent.
                    </li>
                    <li>
                        To manage user accounts. We may use your information for the purpose of managing our account and keeping it in working order.
                    </li>
                    <li>
                        To protect our Services. We may use your information as part of our efforts to keep our Website safe and secure.
                    </li>
                    <li>
                        To respond to legal requests and prevent harm. If we receive a legal request, we may need to inspect the data we hold to determine how to respond.
                    </li>
                </ul>
            </p>
            <h5>
                WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </h5>
            <p>
                In short: We only share information with your consent, to comply with laws, to provide you with services and to protect your rights.
            </p>
            <p>
                Currently, we don’t have advertisements or business collaborations with other companies. It is guaranteed that no data of yours will be shared with any third parties.
            </p>
            <h5>
                HOW LONG DO WE KEEP YOUR INFORMATION?
            </h5>
            <p>
                In short: We keep your information for as long as necessary to fulfill the purpose outlined in this privacy notice unless otherwise required by law.
            </p>
            <p>
                We will not retain your personal information for longer than is necessary for our business purposes or for legal requirements. When no longer required, we will destroy, erase or de-personalize the information. Legal requirements may necessitate that we retain some or all of the personal information we hold for a period of time that is longer than we might otherwise hold it. You may ask that your personal data be deleted (see Deleting your Data above).
            </p>
            <h5>
                HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h5>
            <p>
                We use the bcrypt NPM package which is a JavaScript implementation of the bcrypt password hashing function that allows us to easily create a hash out of a password string to keep them safe. Unlike encryption which you can decode to get back the original password, hashing is a one-way function that can’t be reversed once done. When the user submits a password, the password will be hashed and your JavaScript application needs to store the hash in the database. Later when the user wants to authenticate his or her account, you need to compare the password input with the hash stored in your database to see if it matches.
            </p>
            <h5>
                WHAT ARE YOUR PRIVACY RIGHTS?
            </h5>
            <p>
                In short: You may review, change, or terminate your account at any time.
            </p>
            <h5>
                Account Information
            </h5>
            <p>
                If you would at any time like to review or change the information in your account or terminate your account, you can:
                <ul>
                    <li>
                        Log in to your account settings and update your user account.
                    </li>
                </ul>
                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
            </p>
            <h5>
                DO WE MAKE UPDATES TO THIS NOTICE?
            </h5>
            <p>
                In short: We may update this policy from time to time.
            </p>
            <p>
                We will notify you of any changes by posting the new policy online on this page, and if the changes are significant, we will provide a more prominent notice (including, for certain services, email notification of privacy policy changes). It is your responsibility to read this Privacy Policy carefully and review any changes that may have been made. Because changes will be posted on this page, we encourage you to check this page regularly.
            </p>
            <h5>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h5>
            <p>
                If you have any questions about this policy, please send an email to boxi.z.chen@gmail.com.
            </p>

            <input type="submit" className="btn btn-primary my-3" value="Back" onClick={
                () => navigate(-1)
            }/>





        </section>
    );

};

export default Privacy;