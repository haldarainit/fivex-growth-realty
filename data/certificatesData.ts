export interface CertificateItem {
  id: string;
  title: string;
  category: string;
  issuer: string;
  regNumber: string;
  fileType: 'pdf' | 'image';
  filePath: string;
  downloadName: string;
  previewImage: string;
  description: string;
}

export const certificatesData: CertificateItem[] = [
  {
    id: 'coi-certificate',
    title: 'Certificate of Incorporation (COI)',
    category: 'Corporate Legal Status',
    issuer: 'Ministry of Corporate Affairs (MCA), Govt. of India',
    regNumber: 'SPICE+ AB4792410',
    fileType: 'pdf',
    filePath: '/certificate/%235%20(COI)%2C%20CERTIFICATE%20OF%20INCORPORATION%2C%20SPICE%20%2B%20Part%20B_Approval%20Letter_AB4792410_26%20Jun%202025.pdf',
    downloadName: 'FIVEX_Growth_Realty_COI.pdf',
    previewImage: '/certificate/coi-card.png',
    description: 'Official Certificate of Incorporation of FIVEX Growth Realty Private Limited issued under the Companies Act, 2013 by the Registrar of Companies.',
  },
  {
    id: 'dipp-recognition',
    title: 'DPIIT Startup India Recognition',
    category: 'Government Recognition',
    issuer: 'Dept. for Promotion of Industry & Internal Trade (DPIIT)',
    regNumber: 'DIPP221557',
    fileType: 'pdf',
    filePath: '/certificate/DIPP221557_FIVEX_GROWTH_REALTY_PRIVATE_LIMITED_RECOGNITION_4063956163410623901.pdf',
    downloadName: 'FIVEX_DPIIT_Recognition_DIPP221557.pdf',
    previewImage: '/certificate/dpiit-card.png',
    description: 'Official Government Recognition Certificate for innovative real estate advisory & digital portal technologies.',
  },
  {
    id: 'gst-registration',
    title: 'GST Registration Certificate',
    category: 'Tax & Compliance',
    issuer: 'Goods and Services Tax Network (GSTN), India',
    regNumber: '09AAGCF4809D1ZQ',
    fileType: 'pdf',
    filePath: '/certificate/GST%20Registration%20Certificate%20FIVEX%20GROWTH%20REALTY%20PVT%20LTD%20(09AAGCF4809D1ZQ)%20AA0904260205864_RC04042026.pdf',
    downloadName: 'FIVEX_GST_Registration_Certificate.pdf',
    previewImage: '/certificate/gst-card.png',
    description: 'Government Tax Registration Certificate under GST Act for corporate real estate advisory and transaction services.',
  },
  {
    id: 'udyam-registration',
    title: 'Udyam MSME Enterprise Certificate',
    category: 'MSME Accreditation',
    issuer: 'Ministry of Micro, Small & Medium Enterprises',
    regNumber: 'UDYAM-UP-00-12948',
    fileType: 'image',
    filePath: '/certificate/udyam%20registration.jpeg',
    downloadName: 'FIVEX_Udyam_MSME_Registration.jpeg',
    previewImage: '/certificate/udyam%20registration.jpeg',
    description: 'Official MSME Udyam Registration Certificate establishing corporate operational and business infrastructure credentials.',
  },
  {
    id: 'pan-registration',
    title: 'Permanent Account Number (PAN) Card',
    category: 'Tax Identification',
    issuer: 'Income Tax Department, Govt. of India',
    regNumber: 'AAGCF4809D',
    fileType: 'pdf',
    filePath: '/certificate/%231%20(PAN)%20Number%2C%20Permanent%20Account%20NumberAAGCF4809D%2C%20882052104329583_unlocked.pdf',
    downloadName: 'FIVEX_Corporate_PAN_Card.pdf',
    previewImage: '/certificate/pan-card.png',
    description: 'Official Corporate Permanent Account Number (PAN) allotted by Income Tax Department of India for corporate transactions.',
  },
  {
    id: 'tan-registration',
    title: 'Tax Deduction Account Number (TAN)',
    category: 'Tax Identification',
    issuer: 'Income Tax Department, Govt. of India',
    regNumber: 'MRTF03228B',
    fileType: 'pdf',
    filePath: '/certificate/%232%20TAN%20NUMBER%2C%20Tax%20Deduction%20Account%20NumberMRTF03228B%2C%2088305927248313_unlocked.pdf',
    downloadName: 'FIVEX_Corporate_TAN_Card.pdf',
    previewImage: '/certificate/tan-card.png',
    description: 'Official Tax Deduction and Collection Account Number (TAN) registered for corporate payroll and vendor compliance.',
  },
];
