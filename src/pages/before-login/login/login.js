import React, { useState } from 'react'
import Image from '../../../components/shared/image/image'
import Styles from './login.module.scss'
import { Input, Button, Heading, Text } from '../../../components/shared/index'
import { useForm } from "react-hook-form";

const Login = () => {

    // const[continueEnable,setContinueEnable]=useState(false);
    const [active, setActiveNow] = useState();
    const [show, setShow] = useState(false);
    const [showHide, setShowHide] = useState(true);

    const showDetails = () => {
        setShow(true);
        setShowHide(false);
    }
   


    const { register, handleSubmit, formState: { errors }, } = useForm({
        mode: 'onChange',
    });
    const onSubmit = data => console.log(data);
    console.log(errors);


    return (

        <div className={Styles.container}>
            <div className={Styles.technoMile}>
                <div className={Styles.imageBox}>
                    <Image src='assets/images/logo.png' alt={"Logo"} />
                </div>
                { showHide && (
                <div className={Styles.mainCard}>
                    <div className={Styles.mainBox}>
                        <Heading className={Styles.mainHead} color={"secondary"} headingType={"h1"}>Sign in</Heading>
                        <Text className={Styles.mainText} variant={"mlgText"} color={""} strong={"strong4"}>
                            Enter your email address to sign in.</Text>
                        <div className={Styles.inputMain} >
                            <Input className={` ${Styles.mt30} ${active === 0 ? Styles.active : ''}`}
                                variant="border" type="email" placeholder="Enter Your Email"
                                name="email"
                                onClick={() => { setActiveNow(0) }}
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
                            <Button size={"lg02"} variant={active === 0 ? "solidPrimary" : "disabled"} btnHandler={showDetails}>Continue</Button>

                        </div>
                        <Text className={Styles.secText} variant={"smText"} color={"black"} strong={"strong4"}>Can’t Sign in?</Text>
                    </div>
                  </div>)}
                {show && (
                    <div>
                        <div className={Styles.mainCard}>
                            <div className={Styles.mainBox}>
                                <Heading className={Styles.mainHead} color={"secondary"} headingType={"h1"}>Password</Heading>
                                <Text className={Styles.mainText} variant={"mlgText"} color={""} strong={"strong4"}>
                                    Enter your password to continue.</Text>
                                <div className={Styles.inputMain} >
                                    <Input className={` ${Styles.mt30} ${active === 0 ? Styles.active : ''}`}
                                        variant="border" type="email" placeholder="Enter Your Email"
                                        name="email"
                                        onClick={() => { setActiveNow(0) }}
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
                                    <Input className={Styles.passText} type="password" variant="border" />
                                </div>
                                <div className={Styles.forgotText}>
                            <Text variant={"smText"} color={"black"} strong={"strong4"}>forgot password?</Text>
                        </div>

                                <div className={Styles.btnMain}  >
                                    <Button size={"lg02"} variant={active === 0 ? "solidPrimary" : "disabled"} btnHandler={handleSubmit(onSubmit)} >Continue</Button>

                                </div>
                                <Text className={Styles.secText} variant={"smText"} color={"black"} strong={"strong4"}>Can’t Sign in?</Text>
                            </div>
                        </div>
                    </div>)}
            </div>








            <div className={Styles.resourCes}>
                <div className={Styles.resourCesBox}>
                    <Text className={Styles.secText} variant={"xxxxText"} strong={"strong7"} color={"secondary"} >Featured Resources</Text>
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
