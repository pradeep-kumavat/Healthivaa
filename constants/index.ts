export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Identity Card",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Rahul Chaudhary",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Yogesh Chauhan",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Rajesh Kumar",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Megha Sharma",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Prashant Singh",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Pratiksha Singh",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Ritika bansal",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Akarsh verma",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Utkarsh Pandey",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
