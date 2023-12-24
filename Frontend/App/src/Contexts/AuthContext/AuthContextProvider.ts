// import React, {useState} from 'react'
// import { AuthActions } from '../../Store/Slices/AuthSlice'
// import AuthContext from './AuthContext'
// import ValidateOtp from '../../Components/Auth/Otp/ValidateOtp'
// import ValidateReset from '../../Components/Auth/Reset/ValidateReset'
// import useProcessing from '../../Hooks/useProcessing'
// import ValidateUser from '../../Components/Auth/login/ValidateUser'
// import ValidateEmail from '../../Components/Auth/findAccount/ValidateEmail'

// const AuthContextProvider = (props) => {
//     const {setProcessing} = useProcessing()

//     //LOGIN
//     const [loginDetails, setLoginDetails] = useState({
//         email : '',
//         password : '',
//     })
//     const [loginErrors,setLoginErrors] = useState({
//         emailError:'',
//         passwordError: '',
//     })
    
//     const handleLoginVerification = async () => {
//         setProcessing(true);
//         let success ={};
//         await ValidateUser(loginDetails)
//         .then(res=>{
//             setLoginErrors(res);
//             if(res.none){
//                 success.yes = true
//                 AuthActions.setAccessToken(res)
//                 AuthActions.setIsLoggedIn(true)
//                 setProcessing(false)
//             }
//             else{
//                 success.yes = false
//                 AuthActions.setIsLoggedIn(false)
//                 setProcessing(false);
//             }
//         })
//         console.log(success)
//         return success;
//     }
//     const handleLoginDetailsChange = (e) => {
//         const {id, value} = e.target
//         setLoginDetails(prev=>{
//             return {...prev, [id]: value}
//         })
//     }
//     //FIND ACCOUNT

//     const [email,setEmail] =useState('');
//     const [emailError,setEmailError] = useState('');

//     const handleFindEmail = async ()=>{
//         setProcessing(true);
//         let success = {}
//         await ValidateEmail(email)
//         .then(res=>{
//             setEmailError(res.emailError)
//             if(res.none){
//                 success.yes = true
//                 setProcessing(false);
//             }
//             else{
//                 success.yes = false
//                 setProcessing(false);
//             }
//         })
//         return success;
//     }
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value)
//     }
//     // OTP
//     const [otp, setOtp] = useState('')
//     const [otpError, setOtpError] = useState('')

//     const handleVerifyOtp = async () => {
//         setProcessing(true)
//         let success = {}
//         await ValidateOtp(otp)
//         .then(res=>{
//             setOtpError(res.otpError)
//             if(res.none){
//                 success.yes = true
//                 setProcessing(false)
//             }
//             else{
//                 success.yes = false
//                 setProcessing(false)
//             }
//         })
//         return success
//     }

//     // RESET
//     const [resetDetails, setResetDetails] = useState({
//         newPassword: '',
//         confirmPassword: ''
//     })
//     const [resetErrors, setResetErrors] = useState({
//         newPasswordError: '',
//         confirmPasswordError:''
//     })

//     const handleResetDetailsChange = (e) => {
//         const {id, value} = e.target
//         setResetDetails(prev=>{
//             return {...prev, [id]: value}
//         })
//     }

//     const handleReset = async () => {
//         setProcessing(true)
//         let success = {}
//         await ValidateReset(resetDetails)
//         .then(res=>{
//             setResetErrors(res)
//             if(res.none){
//                 success.yes = true
//                 setProcessing(false)
//             }
//             else{
//                 success.yes = false
//                 setProcessing(false)
//             }
//         })
//         return success
//     }

//     const value = {
//         //LOGIN
//         loginDetails:loginDetails,
//         loginErrors : loginErrors,
//         handleLoginDetailsChange: handleLoginDetailsChange,
//         handleLoginVerification: handleLoginVerification,

//         //FIND ACCOUNT
//         email :email,
//         emailError: emailError,
//         setEmail:handleEmailChange,
//         handleFindEmail: handleFindEmail,

//         // OTP
//         otp: otp,
//         otpError:otpError,
//         setOtp: setOtp,
//         handleVerifyOtp: handleVerifyOtp,

//         // RESET
//         resetDetails: resetDetails,
//         resetErrors: resetErrors,
//         handleReset: handleReset,
//         handleResetDetailsChange: handleResetDetailsChange
//     }

//     return (
//         <AuthContext.Provider value={value}>
//             {props.children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContextProvider