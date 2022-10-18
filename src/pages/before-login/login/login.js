import React, { useState } from 'react'
import Image from '../../../components/shared/image/image'
import Styles from './login.module.scss'
import { Input, Button, Heading, Text, Modal } from '../../../components/shared/index'
import { useForm } from "react-hook-form";



const Login = () => {


    const [show, setShow] = useState(false);
    const [showHide, setShowHide] = useState(true);
    const [showFactor, setShowFactor] = useState(false);
    const [showForgat, setShowForgat] = useState(false);


    const showDetails = () => {
        setShow(true);
        setShowHide(false);
    }
    const showMultiFactor = () => {
        setShow(false);
        setShowHide(false);
        setShowFactor(true);
    }
    const showLogin = () => {
        setShow(false);
        setShowHide(true);
        setShowFactor(false);
    }
    const showForgatData = () => {
        setShow(false);
        setShowHide(false);
        setShowFactor(false);
        setShowForgat(true);

    }
    const showPass = () => {
        setShow(true);
        setShowHide(false);
        setShowFactor(false);
        setShowForgat(false);

    }






    const { register, formState: { errors }, } = useForm({
        mode: 'onChange',
    });
    // const onSubmit = data => console.log(data);
    console.log(errors);


    return (

        <div className={Styles.container}>
            <div className={Styles.technoMile}>
                <div className={Styles.imageBox}>
                    <Image src='assets/images/logo.png' alt={"Logo"} />
                </div>
                {/* Login Card Start here */}
                {showHide && (
                    <div className={Styles.mainCard}>
                        <div className={Styles.mainBox}>
                            <Heading className={Styles.mainHead} color={"secondary"} headingType={"h1"}>Sign in</Heading>
                            <Text className={Styles.mainText} variant={"mlgText"} color={""} strong={"strong4"}>
                                Enter your email address to sign in.</Text>
                            <div className={Styles.inputMain} >
                                <Input className={Styles.mt30} 
                                    variant="border" type="email" placeholder="Enter Your Email"
                                    name="email"

                                    reference={register("email", {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    })} />
                                <div className={Styles.errorMsg}>
                                    {errors?.email?.type === "required" && (
                                        <p>*Please enter email address.</p>
                                    )}

                                    {errors?.email?.type === "pattern" && (
                                        <p>*Alphabetical characters only</p>
                                    )}

                                </div>
                            </div>
                            <div className={Styles.btnMain}  >
                                <Button size={"xxlg"} variant={"solidPrimary"} btnHandler={showDetails}>Continue</Button>

                            </div>
                            <Text className={Styles.secText} variant={"smText"} color={"black"} strong={"strong4"} >Can’t Sign in?</Text>
                        </div>
                    </div>)}

                {/* Password Card  */}

                {show && (
                    <div>
                        <div className={Styles.mainCard}>
                            <div className={Styles.mainBox}>
                                <Heading className={Styles.mainHead} color={"secondary"} headingType={"h1"}>Password</Heading>
                                <Text className={Styles.mainText} variant={"mlgText"} color={""} strong={"strong4"}>
                                    Enter your password to continue.</Text>
                                <div className={Styles.inputMain} >
                                    <Input className={Styles.mt30}
                                        variant="border" type="email" placeholder="Enter Your Email"
                                        name="email"

                                        reference={register("email", {
                                            required: true,
                                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        })} />
                                    <div className={Styles.errorMsg}>
                                        {errors?.email?.type === "required" && (
                                            <p>*Please enter email address.</p>
                                        )}


                                        {errors?.email?.type === "pattern" && (
                                            <p>*Alphabetical characters only</p>
                                        )}

                                    </div>
                                    <div className={Styles.inputSec}>
                                        <Input className={Styles.passText} placeholder="*******************" type="password" variant="border" />
                                    </div>
                                </div>
                                <div className={Styles.forgotText}  >
                                    <Text variant={"smText"} color={"black"} strong={"strong4"} handleClick={showForgatData} >forgot password?</Text>
                                </div>

                                <div className={Styles.continueBtn} >
                                    <Button size={"xxlg"} variant={"solidPrimary"} btnHandler={showMultiFactor} >Continue</Button>

                                </div>
                                <div onClick={showLogin}>
                                    <Text className={Styles.secText} variant={"smText"} color={"black"} strong={"strong4"} onClick={showDetails}>Can’t Login?</Text>
                                </div>
                            </div>
                        </div>
                    </div>)}


                {/* Multifactor Card  */}
                {showFactor && (
                    <Modal>
                        <div className={Styles.multifactorMainBox}>
                            <div className={Styles.authenticHeading}>
                                <Heading color={"secondary"} headingType={"h1"} >Multi-Factor </Heading>
                                <Heading className={Styles.autoHead} color={"secondary"} headingType={"h1"} >Authentication</Heading>
                            </div>
                            <div>
                                <Text className={Styles.enterText} variant={"smText"} color={"black"} strong={"strong4"}>Enter Code</Text>
                            </div>
                            <div className={Styles.inputBox}>
                                <Input className={Styles.mt30Box} variant="grey" />
                                <Input className={Styles.mt30Box} variant="grey" />
                                <Input className={Styles.mt30Box} variant="grey" />
                                <Input className={Styles.mt30Box} variant="grey" />
                                <Input className={Styles.mt30Box} variant="grey" />
                                <Input className={Styles.mt30Box} variant="grey" />
                            </div>
                            
                               
                               
                            
                            <Text className={Styles.secText} variant={"smText"} color={"black"} strong={"strong4"}>Resend Code</Text>
                            <div className={Styles.btnMain}  >
                                <Button size={"xxlg"} variant={"solidPrimary"} btnHandler={showDetails}>Enter</Button>
                            </div>
                            <Text className={Styles.secTwoText} variant={"smText"} color={"black"} strong={"strong4"}>Can’t Login?</Text>
                        </div>
                    </Modal>
                )}
                {showForgat && (
                    <div>
                        <Modal>
                            <div className={Styles.forgotBox}>
                                <Heading className={Styles.mainHead} color={"secondary"} headingType={"h1"}>E-mail</Heading>
                                <Text className={Styles.forgotText} variant={"smText"} color={"black"} strong={"strong4"}>Please Enter your Your verify E-mail id</Text>
                                <div className={Styles.inptBox} >
                                    <Input className={Styles.passText} type="text" placeholder={"Enter email"} variant="border" />
                                </div>
                                <div className={Styles.btnMain}  >
                                    <Button size={"xlmd"} variant={"solidPrimary"} >Next</Button>
                                </div>
                                <Text className={Styles.secTwoText} variant={"smText"} color={"black"} strong={"strong4"} handleClick={showPass} >Back to Login?</Text>
                            </div>
                        </Modal>
                    </div>
                )}


            </div>








            <div className={Styles.resourCes}>
                <div className={Styles.resourCesBox}>
                    <Heading headingType={"h1"} color={"secondary"}>Featured Resources</Heading>
                    <div className={Styles.firstImgBox}><Image src='assets/images/elevate.jpg' alt={"Logo"} /></div>

                    <div>
                        <Image src='assets/images/intelligenceResearch.jpg' alt={"Logo"} />
                    </div>
                </div>
            </div>
            <div>


            </div>
        </div>

    )
}

export default Login
