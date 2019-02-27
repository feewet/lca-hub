# Description

The goal of this project is to help engineers reach consensus about sustainability goals and product lifecycles. Contributors are incentivised to validate lifecycle assessments and share them with the public.

The basis of this platform is a bounty system for Life Cycle Assessments (Bounty). We can allow for the crowdsourcing of LCAs and reduce the cost and time for sustainability engineers to perform them.

### Life Cycle Assessments (Bounty)

A Life Cycle Assessment quantifies the environmental impact of a product or service. Organizations use LCAs to inform decisions regarding sustainability and implementation of sustainable policies.

The length of LCAs varies on a project-to-project basis, however they are often very straightforward and involve chemical reactions and dimensional analysis. Engineers often use software such as GaBi to assist in creating and streamlining LCAs.

The current system to create LCAs is heavily centralized. Both organizations and engineers can benefit greatly from a direct system to draft and verify life cycle assessments. Currently, engineers must work through a third party such as a government or corporation in order to complete these reports. By removing the middle men, assesments can be done signifigantly faster at lower cost.

### Building a Better World

An example use case for this platform would be to allow small businesses to analyze the carbon footprint of their service at a very low cost. Additionally, they could use assessments to optimize their environmental impact and advertise their low impact to consumers as a competative advantage.

College engineering professors are great contenders to become validators. Professors are generally committed to research and development of progressive technology to improve sustainability. In addition, they are generally qualified to audit and validate LCAs.

On top of that, college students are great contenders to write and submit LCAs. Creating these reports is a standard task for students studying engineering. Even if the reports are done incorrectly or poorly, they can always be rejected and a new contributor selected to fill a bounty.

# Spec

The platform will be built on an Ethereum dApp using IPFS for decentralized hosting.

### Verification

* Engineers will sign up and have their qualifications and identity verified and linked to their ethereum address.

* Verified engineers are able to manually validate LCAs by signing them.

### Bounty Submission

* Funders can upload a goal and scope definition and attach a bounty. Funders specify the number of validators required before 

### Report Submission

* Contributors can apply to work on any open LCAs. Once the funder approves the contributor, they can begin to work on the report.

* Once a report is submitted, it is reviewed by the funder

### Bounty Approval

* Verified engineers recieve a portion of the bounty to read and approve LCAs.

* Once an Bounty has been verified enough times, the remaining bounty is paid to the submitter and the Bounty is considered valid.

* Valid LCAs are posted publicly on ipfs and made available through our service.

# Future Considerations

### Incentive Structure

It's important how much of the bounty goes to the Bounty submitter and how much goes to the validators. If the submitter gets paid too little, nobody will submit LCAs. If the validators get paid too little, nobody will validate.

### Dispute Process

There will be situations where an invalid Bounty is submitted or verified engineers do not agree on the validity of a report. There will need to be a dispute process for these scenarios. A possible solution would be to use Kleros to resolve disputes (https://juror.kleros.io/)

### Verification Issues (Identity)

Inherently, the engineer verification will need to be centralized. An administrator will need to keep track of verified engineers and manually go over new applicants' licenses. As identity on the blockchain improves, it will be possible to connect with a decentralized reputation system for a more thorough review and quantification of an engineer's validation.

### Privacy

Some groups might want their LCAs to be done without posting data to the public to maintain competitive advantage. This might be out of the scope for this project, however the ability to privately crowdsource LCAs is a very useful feature for corporations.

### Assumptions and Bounty Re-evalutation

Assumptions and lifecycles change as new research becomes available. Creating an incentive structure for people to improve existing LCAs would help engineers find more accurate results thus increasing our knowledge of the economic impact for products and services.

### Formalizing Provable LCAs

Because LCAs are based on math and chemical equations, there is a way to formulate this math into a proof which can be verified. Many engineers use software such as GBai (http://www.gabi-software.com/america/index/) to create models, therefore compatibility with such software would be beneficial. Furthermore, formalizing proofs of Bounty correctness and verifying them on the Ethereum blockchain would speed up the Bounty creation process.

### Prediction Markets

Each verified Bounty could be formulated into a prediction market where users can stake on the validity of the results. If the Bounty can be proved wrong, the stakers can be paid out based on whether they believed the results are true or false.

