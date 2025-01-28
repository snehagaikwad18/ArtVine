import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { MdCheckCircle, MdError } from "react-icons/md";

import { motion } from "framer-motion";


const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
        code: 'AE',
        label: 'United Arab Emirates',
        phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
        code: 'AG',
        label: 'Antigua and Barbuda',
        phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
        code: 'AU',
        label: 'Australia',
        phone: '61',
        suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
        code: 'BA',
        label: 'Bosnia and Herzegovina',
        phone: '387',
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
        code: 'CA',
        label: 'Canada',
        phone: '1',
        suggested: true,
    },
    {
        code: 'CC',
        label: 'Cocos (Keeling) Islands',
        phone: '61',
    },
    {
        code: 'CD',
        label: 'Congo, Democratic Republic of the',
        phone: '243',
    },
    {
        code: 'CF',
        label: 'Central African Republic',
        phone: '236',
    },
    {
        code: 'CG',
        label: 'Congo, Republic of the',
        phone: '242',
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
        code: 'DE',
        label: 'Germany',
        phone: '49',
        suggested: true,
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
        code: 'DO',
        label: 'Dominican Republic',
        phone: '1-809',
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
        code: 'FK',
        label: 'Falkland Islands (Malvinas)',
        phone: '500',
    },
    {
        code: 'FM',
        label: 'Micronesia, Federated States of',
        phone: '691',
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
        code: 'FR',
        label: 'France',
        phone: '33',
        suggested: true,
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
        code: 'GS',
        label: 'South Georgia and the South Sandwich Islands',
        phone: '500',
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
        code: 'HM',
        label: 'Heard Island and McDonald Islands',
        phone: '672',
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
        code: 'IO',
        label: 'British Indian Ocean Territory',
        phone: '246',
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
        code: 'IR',
        label: 'Iran, Islamic Republic of',
        phone: '98',
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
        code: 'JP',
        label: 'Japan',
        phone: '81',
        suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
        code: 'KN',
        label: 'Saint Kitts and Nevis',
        phone: '1-869',
    },
    {
        code: 'KP',
        label: "Korea, Democratic People's Republic of",
        phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
        code: 'LA',
        label: "Lao People's Democratic Republic",
        phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
        code: 'MD',
        label: 'Moldova, Republic of',
        phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
        code: 'MF',
        label: 'Saint Martin (French part)',
        phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
        code: 'MK',
        label: 'Macedonia, the Former Yugoslav Republic of',
        phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
        code: 'MP',
        label: 'Northern Mariana Islands',
        phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
        code: 'PM',
        label: 'Saint Pierre and Miquelon',
        phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
        code: 'PS',
        label: 'Palestine, State of',
        phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
        code: 'SJ',
        label: 'Svalbard and Jan Mayen',
        phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
        code: 'ST',
        label: 'Sao Tome and Principe',
        phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
        code: 'SX',
        label: 'Sint Maarten (Dutch part)',
        phone: '1-721',
    },
    {
        code: 'SY',
        label: 'Syrian Arab Republic',
        phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
        code: 'TC',
        label: 'Turks and Caicos Islands',
        phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
        code: 'TF',
        label: 'French Southern Territories',
        phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
        code: 'TT',
        label: 'Trinidad and Tobago',
        phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
        code: 'TW',
        label: 'Taiwan',
        phone: '886',
    },
    {
        code: 'TZ',
        label: 'United Republic of Tanzania',
        phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
        code: 'US',
        label: 'United States',
        phone: '1',
        suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
        code: 'VA',
        label: 'Holy See (Vatican City State)',
        phone: '379',
    },
    {
        code: 'VC',
        label: 'Saint Vincent and the Grenadines',
        phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
        code: 'VG',
        label: 'British Virgin Islands',
        phone: '1-284',
    },
    {
        code: 'VI',
        label: 'US Virgin Islands',
        phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];

const formDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, City, Country",
    phone: "+1234567890",
};
const CustomOrder = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [showPopup, setShowPopup] = useState(false);

    // Function to handle "Agree" button click
    const handleAgreeClick = () => {
        setOpen(false);
        setShowPopup(true);
    };

    // Motion animation variants for the popup
    const popupVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 25 },
        },
    };



    const handleClickOpen = (e) => {
        e.preventDefault()
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div
            className="min-h-screen flex items-center justify-center p-8"
            style={{
                background: 'linear-gradient(to bottom right, #2B4C6C, #4A6A7B, #A6D4D3)',
            }}
        >
            <div
                className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8"
                style={{ fontFamily: 'Graphik, sans-serif' }}
            >
                {/* Heading */}
                <h1
                    className="text-4xl font-bold text-center mb-8"
                    style={{
                        fontFamily: 'Playfair Display, serif',
                        color: '#2B4C6C',
                    }}
                >
                    Create Your Custom Art
                </h1>

                {/* Form */}
                <form className="space-y-6">
                    {/* Contact Name */}
                    <div>
                        <label className="block text-sm mb-2" style={{ color: '#2B4C6C' }}>
                            Contact Name
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <TextField id="outlined-basic" label="First" variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#4A6A7B", // Default border color
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#4A6A7B", // Hover border color
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#4A6A7B", // Focused border color
                                        },
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#4A6A7B", // Label default color
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#4A6A7B", // Label focused color
                                    },
                                }}
                            />

                            <TextField id="outlined-basic" label="Last" variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#4A6A7B", // Default border color
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#4A6A7B", // Hover border color
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#4A6A7B", // Focused border color
                                        },
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#4A6A7B", // Label default color
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#4A6A7B", // Label focused color
                                    },
                                }}
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#4A6A7B", // Default border color
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#4A6A7B", // Hover border color
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#4A6A7B", // Focused border color
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#4A6A7B", // Label default color
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#4A6A7B", // Label focused color
                                },
                            }}
                            className='w-full'
                        />
                    </div>

                    {/* Delivery Address */}
                    <div>
                        <label className="block text-sm mb-2" style={{ color: '#2B4C6C' }}>
                            Delivery Address
                        </label>
                        <input
                            type="text"
                            placeholder="Street Address"
                            className="w-full border rounded-md p-3 mb-2 focus:ring-1 focus:ring-[#4A6A7B] focus:outline-none "
                            style={{ borderColor: '#4A6A7B' }}
                        />
                        <input
                            type="text"
                            placeholder="Street Address Line 2"
                            className="w-full border rounded-md p-3 mb-2 focus:ring-1 focus:ring-[#4A6A7B] focus:outline-none"
                            style={{ borderColor: '#4A6A7B' }}
                        />
                        <div className="grid grid-cols-3 gap-4">
                            <TextField id="outlined-basic" label="City" variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#4A6A7B", // Default border color
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#4A6A7B", // Hover border color
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#4A6A7B", // Focused border color
                                        },
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#4A6A7B", // Label default color
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#4A6A7B", // Label focused color
                                    },
                                }}
                                className='w-full'
                            />
                            <TextField id="outlined-basic" label="Region" variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#4A6A7B", // Default border color
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#4A6A7B", // Hover border color
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#4A6A7B", // Focused border color
                                        },
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#4A6A7B", // Label default color
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#4A6A7B", // Label focused color
                                    },
                                }}
                                className='w-full'
                            />
                            <TextField id="outlined-basic" label="Postal/Zip Code" variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#4A6A7B", // Default border color
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#4A6A7B", // Hover border color
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#4A6A7B", // Focused border color
                                        },
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#4A6A7B", // Label default color
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#4A6A7B", // Label focused color
                                    },
                                }}
                                className='w-full'
                            />

                            <Autocomplete
                                id="country-select-demo"
                                sx={{ width: 300 }}
                                options={countries}
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                renderOption={(props, option) => {
                                    const { key, ...optionProps } = props;
                                    return (
                                        <Box
                                            key={key}
                                            component="li"
                                            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                            {...optionProps}
                                        >
                                            <img
                                                loading="lazy"
                                                width="20"
                                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                alt=""
                                            />
                                            {option.label} ({option.code}) +{option.phone}
                                        </Box>
                                    );
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Choose a country"
                                        slotProps={{
                                            htmlInput: {
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            },
                                        }}
                                    />
                                )}
                            />
                        </div>


                    </div>

                    {/* Size of Canvas */}
                    <div>
                        <label className="block text-sm mb-2" style={{ color: '#2B4C6C' }}>
                            Size of Canvas
                        </label>
                        <select
                            className="w-full border rounded-md p-3"
                            style={{ borderColor: '#4A6A7B', color: '#2B4C6C' }}
                        >
                            <option value="">Please select</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="custom">Custom Size</option>
                        </select>
                    </div>

                    {/* Other Information */}
                    <div>
                        <label className="block text-sm mb-2" style={{ color: '#2B4C6C' }}>
                            Other Information
                        </label>
                        <textarea
                            placeholder="Please let me know if there are any other requirements."
                            className="w-full border rounded-md p-3 focus:ring-1 focus:ring-[#4A6A7B] focus:outline-none "
                            rows="4"
                            style={{ borderColor: '#4A6A7B' }}
                        />


                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="block text-sm mb-2" style={{ color: '#2B4C6C' }}>
                            Due Date
                        </label>
                        <input
                            type="date"
                            className="w-full border rounded-md p-3 focus:ring-1 focus:ring-[#4A6A7B] focus:outline-none "
                            style={{ borderColor: '#4A6A7B' }}
                        />
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <label className="block text-sm mb-2" style={{ color: '#2B4C6C' }}>
                            Payment Methods
                        </label>
                        <div className="flex items-center space-x-6">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                    className="mr-2"
                                    style={{ borderColor: '#4A6A7B' }}
                                />
                                Cash
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="credit"
                                    className="mr-2"
                                    style={{ borderColor: '#4A6A7B' }}
                                />
                                Credit or Debit Card
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-md"
                        style={{
                            backgroundColor: '#4A6A7B',
                            color: '#FFFFFF',
                            fontFamily: 'Graphik, sans-serif',
                        }}
                        onClick={handleClickOpen}
                    >
                        Submit Order
                    </button>
                </form>
            </div>

            <React.Fragment>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"

                >
                    <DialogTitle id="responsive-dialog-title">
                        {/* {<MdCheckCircle className="text-green-500 text-3xl mr-2" /> + "Confirm Your Form Submission"} */}
                        <div className="flex items-center">
                            <MdCheckCircle className="text-green-500 text-3xl mr-2" />
                            <span>Confirm Your Form Submission</span>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <p className="text-gray-700 mb-4">
                                You are about to submit your form. Please take a moment to review all the information you have entered. Once confirmed, your submission will be processed.
                            </p>

                            <div className="mb-4">
                                <p className="font-semibold">Important Notes:</p>
                                <ul className="list-inside list-none text-gray-600">
                                    <li><MdError className="inline text-yellow-500 mr-2" />No Changes After Submission: Once submitted, the information cannot be changed.</li>
                                    <li><MdError className="inline text-yellow-500 mr-2" />Double-Check Your Information: Please verify all the details before proceeding with the form submission.</li>
                                    <li><MdError className="inline text-yellow-500 mr-2" />Confirmation: After submission, you will receive a confirmation email.</li>
                                </ul>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Disagree
                        </Button>
                        <Button onClick={handleAgreeClick} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

            <div className='' >
                {/* Agree Button (Trigger Popup) */}
                {/* <button
                    onClick={handleAgreeClick}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                >
                    Agree
                </button> */}

                {/* Success Popup with Framer Motion */}
                {showPopup && (


                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        variants={popupVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* <div className="relative"> */}

                        {/* <div className=" absolute rounded-full -top-[55px] left-[45%] h-[100px] w-[100px] bg-white p-1  ">
                                <div className="w-full h-full flex items-center justify-center bg-green-500 rounded-full  ">

                                    <MdDone size={50} className='text-white' />
                                </div>
                            </div> */}

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            {/* Success Icon and Heading */}
                            <div className="flex items-center mb-4">
                                {/* <MdCheckCircle className="text-green-500 text-3xl mr-2" /> */}
                                <h2 className="text-xl font-semibold text-[#2B4C6C]">Your Details Submitted Successfully</h2>
                            </div>

                            {/* Thank You Message */}

                            <p className="text-gray-700 mb-4">
                                Thank you, <span className='font-bold text-[#2B4C6C]'> {formDetails.name}</span>! Your custom details have been successfully received. Below is the information you provided:
                            </p>

                            {/* Form Details */}
                            <div className="p-6 bg-gray-50 rounded-lg shadow-lg space-y-6">
                                {/* Name and Phone Section */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start">
                                    <p className="text-gray-700 font-medium">
                                        <strong className="text-blue-600">Name:</strong> John Doe
                                    </p>
                                    <p className="text-gray-700 font-medium">
                                        <strong className="text-blue-600">Phone Number:</strong> +1 234 567 890
                                    </p>
                                </div>

                                {/* Location Section */}
                                <div className=" rounded-lg space-y-4">
                                    {/* <h1 className="flex items-center text-blue-600 text-lg font-bold">
                                        <MdLocationPin size={30} className="mr-2" /> Location
                                    </h1> */}
                                    <p className="text-gray-700">
                                        <strong className="text-blue-600">Delivery Address:</strong> 123 Main Street, Apt 4B
                                    </p>

                                    <div className="flex flex-wrap gap-4 items-start sm:items-center justify-start">
                                        <p className="text-gray-700 font-medium">
                                            <strong className="text-blue-600">City:</strong> New York
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            <strong className="text-blue-600">Region:</strong> NY
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            <strong className="text-blue-600">Postal Code:</strong> 10001
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            <strong className="text-blue-600">Country:</strong> United States
                                        </p>
                                    </div>
                                </div>

                                {/* Canvas Size and Additional Info */}
                                <p className="text-gray-700">
                                    <strong className="text-blue-600">Canvas Size:</strong> 24x36 inches
                                </p>
                                <p className="text-gray-700">
                                    <strong className="text-blue-600">Additional Information:</strong> Please handle with care.
                                </p>

                                {/* Due Date and Payment Method */}
                                <div className="flex flex-wrap gap-4 items-start sm:items-center justify-start">
                                    <p className="text-gray-700 font-medium">
                                        <strong className="text-blue-600">Due Date:</strong> December 31, 2024
                                    </p>
                                    <p className="text-gray-700 font-medium">
                                        <strong className="text-blue-600">Payment Method:</strong> Credit Card
                                    </p>
                                </div>
                            </div>


                            {/* Payment Buttons */}
                            <div className="flex justify-end space-x-4 pt-5">
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                                    Proceed to Payment
                                </button>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                        {/* </div> */}
                    </motion.div>

                )}
            </div>
        </div>
    )
}

export default CustomOrder