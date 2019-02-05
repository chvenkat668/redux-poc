import {
  GET_SERVICE_CARDS,
} from '../constants'
const initialState = {
  data:[
    {
      name: 'Payment Eligibility - US - CA - AIP',
      companyPlatform: 'Enterprise Platforms',
      platformOwner: 'John Doe',
      definition: 'Can I make a payment? What type? How much?',
      explanation: 'There are market based rules.',
      examples: ['Customer can make only x number of immediate payments in US market per day.', 'Customer cannot make an immediate payment if there is a scheduled payment.'],
      createdAt: 1543458413117,
      note: '',
      productLine: {
        AIP: true,
        threePIP: false,
      },
      feature: [{
        name: 'Payment Eligibility Details',
        US: {
          status: 'POA',
          url: 'https://someurl.com',
        },
        CA: {
          status: 'NA',
          url: '',
        },
      }],
    }, {
      name: 'Payment Instrument Maintenance - US - CA - threePIP',
      companyPlatform: 'Enterprise Platforms',
      platformOwner: 'John Doe',
      definition: 'Add or maintain a payment instrument for making payments.',
      explanation: 'Different instruments allowed to make payments are: RT/DDA (checking/savings), debit card, credit card,  payment ID, CLABE, etc.',
      examples: ['Add the valid combination of RT1, DDA1.', 'Add the valid debit card number ending with 1234 and provide associated ZIP code, embossed name.'],
      createdAt: 2543458423217,
      note: '',
      productLine: {
        AIP: false,
        threePIP: true,
      },
      feature: [{
        name: 'Create FI Account Enrollment',
        US: {
          status: 'POA',
          url: 'https://someurl.com',
        },
        CA: {
          status: 'POD',
          url: 'https://someotherurl.com',
        },
      }],
    }, {
      name: 'Payment Instrument Verification - US - CA',
      companyPlatform: 'Enterprise Platforms',
      platformOwner: 'John Doe',
      definition: 'Verify or validate payment instrument information provided.',
      explanation: 'Bank routing, bank account validation to ensure correct bank and account number provided by the customer.',
      examples: ['890 is not a valid US routing number.', 'Debit card ending 1234 does not belong to Customer 1.'],
      createdAt: 3543458433317,
      note: '',
      productLine: {
        AIP: false,
        threePIP: false,
      },
      feature: [{
        name: 'Payment Eligibility Details',
        US: {
          status: 'POA',
          url: 'https://someurl.com',
        },
        CA: {
          status: 'NA',
          url: '',
        },
      }],
    }, {
      name: 'Payment Arrangement - US - CA - AIP - threePIP',
      companyPlatform: 'Enterprise Platforms',
      platformOwner: 'John Doe',
      definition: 'A future dated payment order that can result in one or multiple payments.',
      explanation: 'Scheduled, recurring (cycle cut, monthly, weekly etc.) with various payment amount options like minimum due, fixed amount, and total balance.',
      examples: ['Setup AutoPay cycle cut for minimum due option that ends by EOY.', 'Fixed date monthly recurring CARE payment.', 'Multiple scheduled payments for Credit customers.'],
      createdAt: 4543458443417,
      note: '',
      productLine: {
        AIP: true,
        threePIP: true,
      },
      feature: [{
        name: 'Payment Eligibility Details',
        US: {
          status: 'POA',
          url: 'https://someurl.com',
        },
        CA: {
          status: 'NA',
          url: '',
        },
      }],
    }, {
      name: 'Payment Setup / Initiation - US -  GB',
      companyPlatform: 'Enterprise Platforms',
      platformOwner: 'John Doe',
      definition: 'Authorize and initiate a payment.',
      explanation: 'Authorize an ad-hoc payment and initiate the payment on the scheduled date. Rules: Payment sweep on the promised date and notifying the clearing system.',
      examples: ['Initiate an ad-hoc payment for customer 1 for $500 in the US market with debit card enrollment.', 'Initiate an AutoPay payment for minimum due amount on x days after cycle cut date in the US market with checking account enrollment.'],
      createdAt: 5543458453517,
      note: '',
      productLine: {
        AIP: false,
        threePIP: false,
      },
      feature: [{
        name: 'Payment Eligibility Details',
        US: {
          status: 'POA',
          url: 'https://someurl.com',
        },
        GB: {
          status: 'NA',
          url: '',
        },
      }],
    }, {
      name: 'End-to-end Transaction Tracking - GB - CA',
      companyPlatform: 'Enterprise Platforms',
      platformOwner: 'Jordan Docherty',
      definition: 'Application developed to support E2E Transaction tracking for Global Remittance Application.',
      explanation: 'This is a java-based toolkit (SDK) developed to support E2E Transaction tracking for Java Applications which perform sending and receiving of remittance data.',
      examples: ['This SDK currently supports connectivity between a Java 1.8 client and the BeetRt app through the means of a Java library. Supported data transport channels include Kafka.', 'This SDK currently supports connectivity between a Java 1.8 client and the BeetRt app through the means of a Java library. Supported data transport channels include Kafka.', 'Capture Transactions processed in GR platforms (only tracking information)', 'Store processed transaction', 'Trace if the systems have completed the processing', 'Alert if any anomalies occur.', 'This is revised version of the E2E Tracking Application supported by Spring and UnderTow.'],
      createdAt: 6543458453617,
      note: 'Note Six',
      productLine: {
        AIP: false,
        threePIP: false,
      },
      feature: [{
        name: 'Payment Eligibility Details',
        GB: {
          status: 'POA',
          url: 'https://someurl.com',
        },
        CA: {
          status: 'NA',
          url: '',
        },
      }],
    },
    {
      name: 'End-to-end Transaction Tracking - US - GB - threePIP',
      companyPlatform: 'Enterprise Platforms',
      platformOwner: 'Jordan Docherty',
      definition: 'Application developed to support E2E Transaction tracking for Global Remittance Application.',
      explanation: 'This is a java-based toolkit (SDK) developed to support E2E Transaction tracking for Java Applications which perform sending and receiving of remittance data.',
      examples: ['This SDK currently supports connectivity between a Java 1.8 client and the BeetRt app through the means of a Java library. Supported data transport channels include Kafka.', 'This SDK currently supports connectivity between a Java 1.8 client and the BeetRt app through the means of a Java library. Supported data transport channels include Kafka.', 'Capture Transactions processed in GR platforms (only tracking information)', 'Store processed transaction', 'Trace if the systems have completed the processing', 'Alert if any anomalies occur.', 'This is revised version of the E2E Tracking Application supported by Spring and UnderTow.'],
      createdAt: 7543458453617,
      note: 'Note Six',
      productLine: {
        AIP: false,
        threePIP: true,
      },
      feature: [{
        name: 'Payment Eligibility Details',
        US: {
          status: 'POA',
          url: 'https://someurl.com',
        },
        GB: {
          status: 'NA',
          url: '',
        },
      }],
    },
  ],
      filters:''
    }

export default function serviceCards(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICE_CARDS:
      return{
      }
    default:
      return state
  }
}
