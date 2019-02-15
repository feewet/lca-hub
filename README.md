# Description

The goal of this project is to help engineers reach consensus about sustainability goals and product lifecycles. Contributors are incentivised to validate lifecycle assessments and share them with the public.

The basis of this platform is a bounty system for Life Cycle Assessments (LCA). We can allow for the crowdsourcing of LCAs and reduce the cost and time for sustainability engineers to perform them.

### Life Cycle Assessments (LCA)

A Life Cycle Assessment quantifies the environmental impact of a product or service. Organizations use LCAs to inform decisions regarding sustainability and implementation of sustainable policies.

The length of LCAs varies on a project-to-project basis, however they are often very straightforward and involve chemical reactions and dimensional analysis. Engineers often use software such as GaBi to assist in creating and streamlining LCAs. 

We believe the current system to create LCAs is heavily centralized. Both organizations and engineers can benefit greatly from a decentralized system to draft and verify life cycle assessments. Under the current system, engineers must work through a third party such as a government or corporation in order to complete these reports. By removing the middle men, assesments can be done signifigantly faster at lower cost.

### Building a Better World

An example use case for this platform would be to allow small businesses to analyze the carbon footprint of their service at a very low cost. Additionally, they could use assessments to optimize their environmental impact and advertise their low impact as a competative advantage to consumers.

# Spec

The platform will be built on an Ethereum dApp using IPFS for decentralized hosting.

### Verification

* Engineers will sign up and have their qualifications and identity verified and linked to their ethereum address. Smart contract maps valid addresses to True.

* Verified engineers are able to manually validate LCAs by signing them.

### Bounty Submission

* Funders can upload a goal and scope definition and attach a bounty. 

### LCA Submission

* Contributors can apply to work on any open LCAs. Once the funder approves the contributor, they can begin to work on the report.

* Once a report is submitted, it is reviewed by the funder

### LCA Approval

* Verified engineers recieve a portion of the bounty to read and approve LCAs.

* Once an LCA has been verified 3 times, the remaining bounty is paid to the submittor and the LCA is considered valid.

* Valid LCAs are posted publically

# Future Considerations

### Dispute Process

There will be situations where an invalid LCA is submitted or verified engineers do not agree on the validity of a report. There will need to be a dispute process for these scenarios.

### Verification Issues (Identity)

Inherently, the engineer verification will need to be centralized. An administrator will need to keep track of verified engineers and manually go over new applicants' licenses.

### Privacy

Some groups might want their LCAs to be done without posting data to the public to maintain competative advatage. This might be out of the scope for this project, however the ability to privately crowdsource LCAs is a very useful feature for corporations.
