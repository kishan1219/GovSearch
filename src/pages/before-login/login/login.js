import React, { useState } from "react";
import Image from "../../../components/shared/image/image";
import Styles from "./login.module.scss";
import { useForm } from "react-hook-form";
import {
  Input,
  Button,
  Heading,
  Text,
  Modal,
  CheckBox,
  Icon,
  Card,
} from "../../../components/shared/index";
import OtpInput from "react-otp-input";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    showDetails();
    console.log(data);
    console.log(errors);
  };
  const onConfirm = (data) => {
    showMultiFactor();
    console.log(data);
    console.log(errors);
  };
  const [showErrors, setErrors] = useState({}); // for show error
  const setError = (error) => {
    setErrors({ ...showErrors, otpInput: error });
  };

  const handleOTPChange = (inputOTP) => {
    setOTP(inputOTP);
    if (inputOTP.length <= 5) {
      // 0 to 5 length
      setError({ message: "Please enter 6 digits OTP number" });
    } else {
      setError("");
    }
  };
  console.table(showErrors);

  const [OTP, setOTP] = useState("");
  const [show, setShow] = useState(false);
  const [showHide, setShowHide] = useState(true);
  const [showFactor, setShowFactor] = useState(false);
  const [showForgat, setShowForgat] = useState(false);
  const [notLogin, setnotLogin] = useState(false);
  const [canLogin, setCanLogin] = useState(false);
  const [showselect, setSelect] = useState(false);
  const [selected, setSelected] = useState(1);

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
    setSelect(false);
  };

  const showDetails = () => {
    setShow(true);
    setShowHide(false);
  };
  const showMultiFactor = () => {
    setShow(false);
    setShowHide(false);
    setShowFactor(true);
  };
  const showLogin = () => {
    setShow(false);
    setShowHide(true);
    setShowFactor(false);
  };
  const showForgatData = () => {
    setShow(false);
    setShowHide(false);
    setShowFactor(false);
    setShowForgat(true);
  };
  const showPass = () => {
    setShow(true);
    setShowHide(false);
    setShowFactor(false);
    setShowForgat(false);
  };
  const shownotLogin = () => {
    setShow(false);
    setShowHide(false);
    setShowFactor(false);
    setShowForgat(false);
    setnotLogin(true);
  };
  const canNotLogin = () => {
    setShow(false);
    setShowHide(false);
    setShowFactor(false);
    setShowForgat(false);
    setnotLogin(false);
    setCanLogin(true);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.technoMile}>
        <div className={Styles.imageBox}>
          <Image
            className={Styles.logoImage}
            src="assets/images/logo.png"
            alt={"Logo"}
          />
        </div>
        {/* Login Card Start here */}
        {showHide && (
          <div className={Styles.mainCard}>
            <div className={Styles.mainBox}>
              <Heading
                className={Styles.mainHead}
                color={"secondary"}
                headingType={"h1"}
              >
                Sign in
              </Heading>
              <Text
                className={Styles.mainText}
                variant={"mlgText"}
                color={""}
                strong={"strong4"}
              >
                Enter your email address to sign in.
              </Text>
              <div className={Styles.inputMain}>
                <Input
                  type="email"
                  name="email"
                  className={Styles.inputEmail}
                  variant="border"
                  placeholder="Enter Your Email"
                  reference={register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                <div className={Styles.errorMsg}>
                  {errors?.email?.type === "required" && (
                    <p>*Please enter email address.</p>
                  )}

                  {errors?.email?.type === "pattern" && (
                    <p>*please enter valid email</p>
                  )}
                </div>
              </div>
              <div className={Styles.btnMain}>
                <Button
                  size={"xxlg"}
                  btnClass={Styles.continueBtn}
                  variant={"solidPrimary"}
                  // btnHandler={() => { showDetails(); handleSubmit(onSubmit) }}
                  btnHandler={handleSubmit(onSubmit)}
                >
                  Continue
                </Button>
              </div>
              <Text
                className={Styles.secText}
                variant={"smText"}
                color={"black"}
                strong={"strong4"}
                handleClick={shownotLogin}
              >
                Can’t Sign in?
              </Text>
            </div>
          </div>
        )}

        {/* Password Card  */}

        {show && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Styles.mainCard}>
              <div className={Styles.mainBox}>
                <Heading
                  className={Styles.mainHead}
                  color={"secondary"}
                  headingType={"h1"}
                >
                  Password
                </Heading>
                <Text
                  className={Styles.mainText}
                  variant={"mlgText"}
                  color={""}
                  strong={"strong4"}
                >
                  Enter your password to continue.
                </Text>
                <div className={Styles.inputMain}>
                  {/* <Input
                  className={Styles.inputEmail}
                  variant="border"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                /> */}
                  <Input
                    type="email"
                    name="email"
                    className={Styles.inputEmail}
                    variant="border"
                    placeholder="Enter Your Email"
                    reference={register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  <div className={Styles.errorMsg}>
                    {errors?.email?.type === "required" && (
                      <p>*Please enter email address.</p>
                    )}

                    {errors?.email?.type === "pattern" && (
                      <p>*please enter valid email</p>
                    )}
                  </div>

                  <div className={Styles.pswBox}>
                    <Input
                      type={"password"}
                      className={Styles.inputEmail}
                      variant="border"
                      placeholder={"Enter Your Password"}
                      name="name"
                      reference={register("password", {
                        required: "*required",
                        minLength: {
                          value: 8,
                          message: "must be 8 chars",
                        },
                        validate: (value) => {
                          return (
                            [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(
                              (pattern) => pattern.test(value)
                            ) ||
                            "must include lower, upper, number, and special chars"
                          );
                        },
                      })}
                    />
                    <div className={Styles.errorMsg}>
                      {errors.password ? (
                        <div>{errors.password.message}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className={Styles.forgotText}>
                  <Text
                    className={Styles.forgat}
                    variant={"smText"}
                    color={"black"}
                    strong={"strong4"}
                    handleClick={showForgatData}
                  >
                    forgot password?
                  </Text>
                </div>

                <div className={Styles.pswContinueBtn}>
                  <Button
                    size={"xxlg"}
                    btnClass={Styles.continueBtn}
                    variant={"solidPrimary"}
                    // btnHandler={showMultiFactor}
                    btnHandler={handleSubmit(onConfirm)}
                  >
                    Continue
                  </Button>
                </div>
                <div onClick={showLogin}>
                  <Text
                    className={Styles.secText}
                    variant={"smText"}
                    color={"black"}
                    strong={"strong4"}
                    onClick={showDetails}
                  >
                    Can’t Login?
                  </Text>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* Multifactor Card  */}

        {showFactor && (
          <Modal className={Styles.multifactorMainBox}>
            <div className={Styles.authenticHeading}>
              <Heading
                className={Styles.autoHead}
                color={"secondary"}
                headingType={"h1"}
              >
                Multi-Factor Authentication{" "}
              </Heading>
            </div>
            <div>
              <Text
                className={Styles.enterText}
                variant={"mlgText"}
                color={"black"}
                strong={"strong4"}
              >
                Enter Code
              </Text>
            </div>
            <div className={Styles.inputMainBox}>
              <OtpInput
                inputStyle={Styles.inputTab}
                containerStyle={Styles.numInput}
                numInputs={6}
                value={OTP}
                onChange={(inputOTP) => handleOTPChange(inputOTP)}
                name="otpInput"
              />
              <div className={`${Styles.otpError} ${Styles.errorMsg}`}>
                {showErrors.otpInput ? (
                  <div>{showErrors.otpInput.message}</div>
                ) : null}
              </div>
            </div>
            <Text
              className={Styles.secText}
              variant={"smText"}
              color={"black"}
              strong={"strong4"}
            >
              Resend Code
            </Text>
            <div className={Styles.btnMain}>
              <Button
                size={"xxlg"}
                btnClass={Styles.continueBtn}
                variant={"solidPrimary"}
                // btnHandler={showDetails}
                btnHandler={handleSubmit(onSubmit)}
              >
                Enter
              </Button>
            </div>
            <div onClick={showLogin}>
              <Text
                className={Styles.secTwoText}
                variant={"smText"}
                color={"black"}
                strong={"strong4"}
                onClick={showDetails}
              >
                Can’t Login?
              </Text>
            </div>
          </Modal>
        )}

        {/* Show Password Modal  */}
        {showForgat && (
          <Modal className={Styles.multifactorMainBox}>
            <div className={Styles.forgotBox}>
              <Heading
                className={Styles.mainHead}
                color={"secondary"}
                headingType={"h1"}
              >
                E-mail
              </Heading>
              <Text
                className={Styles.forgotText}
                variant={"mlgText"}
                color={"black"}
                strong={"strong4"}
              >
                Please Enter you Your verify E-mail id
              </Text>
              <div className={Styles.inptBox}>
                <Input
                  className={Styles.inputEmail}
                  type="email"
                  placeholder={"Enter email"}
                  variant="border"
                />
              </div>
              <div className={Styles.btnMain}>
                <Button
                  btnClass={Styles.mainNextBtn}
                  size={"xlmd"}
                  variant={"solidPrimary"}
                >
                  Next
                </Button>
              </div>
              <Text
                className={Styles.secTwoText}
                variant={"smText"}
                color={"black"}
                strong={"strong4"}
                handleClick={showPass}
              >
                Back to Login?
              </Text>
            </div>
          </Modal>
        )}

        {notLogin && (
          <Modal className={Styles.transparent}>
            <div className={Styles.cardBox}>
              <div className={Styles.cardOne}>
                <Heading
                  className={Styles.accountHead}
                  color={"secondary"}
                  headingType={"h1"}
                >
                  {" "}
                  Confirm Account Information
                </Heading>
                <div className={Styles.cardMainBox}>
                  <Card class={Styles.publicCard}>
                    <div className={Styles.inputHolder}>
                      <div className={Styles.accountInfoBox}>
                        {/* <Input
                            type="fullname"
                            name="fullname"
                            placeholder="First  Name"
                              variant="grey"/> */}
                        <Input
                          className={Styles.Infoinput}
                          type="fname"
                          name="fname"
                          placeholder="First  Name"
                          variant="grey"
                          reference={register("fname", {
                            required: true,
                            minLength: 3,
                            pattern: {
                              value: /^[A-Za-z]/,
                            },
                          })}
                        />
                        <div className={Styles.errorMsg}>
                          {errors?.fname?.type === "required" && (
                            <p>*only Alphabet allow</p>
                          )}
                          {errors?.fname?.type === "pattern" && (
                            <p>not allow alphanumeric number</p>
                          )}
                          {errors?.fname?.type === "minLength" && (
                            <p>Minimum 3 digit number</p>
                          )}
                        </div>

                        {/* <Input
                          className={Styles.Infoinput}
                          placeholder="Phone"
                          variant="grey"
                        /> */}
                        <Input
                          className={Styles.Infoinput}
                          placeholder="Phone"
                          variant="grey"
                          type="text"
                          name="phone1"
                          reference={register("phone1", {
                            required: true,
                            pattern: {
                              value: /^\d{10}$/,
                            },
                          })}
                        />
                        <div className={Styles.errorMsg}>
                          {errors?.phone1?.type === "required" && (
                            <p>*This field is required</p>
                          )}

                          {errors?.phone1?.type === "pattern" && (
                            <p>Please enter valid 10 digit number</p>
                          )}
                        </div>

                        {/* <Input
                          className={Styles.Infoinput}
                          placeholder="Title / Role"
                          variant="grey"
                        /> */}
                        <Input
                          className={Styles.Infoinput}
                          placeholder="Title / Role"
                          variant="grey"
                          type="username"
                          name="username"
                          reference={register("username", {
                            required: true,
                            minLength: 3,
                            pattern: /^\S/,
                          })}
                        />
                        <div className={Styles.errorMsg}>
                          {errors?.username?.type === "required" && (
                            <p>*this field must be required</p>
                          )}

                          {errors?.username?.type === "minLength" && (
                            <p>Minimum 3 character username</p>
                          )}
                          {errors?.username?.type === "pattern" && (
                            <p>space not allow</p>
                          )}
                        </div>

                        <div className={Styles.arrowInput}>
                          <Select
                            className={Styles.empInput}
                            IconComponent={() => null}
                            name="select"
                            reference={register("select", {
                              required: "required",
                            })}
                            sx={{
                              boxShadow: "none",
                              ".MuiOutlinedInput-notchedOutline": { border: 0 },
                            }}
                            value={selected}
                            onChange={selectionChangeHandler}
                            open={showselect}
                          >
                            <MenuItem value="1"># Of Employees</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                          </Select>
                          <Icon
                            onClick={() => setSelect(true)}
                            className={Styles.iconDown}
                            type="soliddownpolygon"
                            variant="icon_xlarge"
                          />
                        </div>
                        <div className={Styles.errorMsg}>
                          {errors.select ? (
                            <div>{errors.select.message}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className={Styles.SecondInput}>
                        <div className={Styles.accountInfoBox}>
                          {/* <Input  
                         className={Styles.Infoinput}
                         placeholder="Last Name"
                         variant="grey"/> */}
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Last Name"
                            variant="grey"
                            reference={register("name", {
                              required: "*required",
                              maxLength: {
                                value: 30,
                                message: "must be 30 chars",
                              },
                              minLength: {
                                value: 2,
                                message: "must be 2 chars",
                              },
                              validate: (value) => {
                                return (
                                  [/^[A-Za-z]+$/i].every((pattern) =>
                                    pattern.test(value)
                                  ) || "only chars are allowed"
                                );
                              },
                            })}
                          />
                          <div className={Styles.errorMsg}>
                            {errors.name ? (
                              <div>{errors.name.message}</div>
                            ) : null}
                          </div>
                          {/* <Input
                            className={Styles.Infoinput}
                            placeholder="Last Name"
                            variant="grey"
                          /> */}
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Phone"
                            variant="grey"
                            type="text"
                            name="phone"
                            reference={register("phone", {
                              required: true,
                              pattern: {
                                value: /^\d{10}$/,
                              },
                            })}
                          />
                          <div className={Styles.errorMsg}>
                            {errors?.phone?.type === "required" && (
                              <p>*This field is required</p>
                            )}

                            {errors?.phone?.type === "pattern" && (
                              <p>Please enter valid 10 digit number</p>
                            )}
                          </div>
                          {/* <Input
                            className={Styles.Infoinput}
                            placeholder="Phone"
                            variant="grey"
                          /> */}

                          {/* <Input
                            className={Styles.Infoinput}
                            placeholder="Company"
                            variant="grey"
                          /> */}
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Company"
                            variant="grey"
                            type="company"
                            name="username"
                            reference={register("company", {
                              required: true,
                              minLength: 3,
                              pattern: /^\S/,
                            })}
                          />
                          <div className={Styles.errorMsg}>
                            {errors?.company?.type === "required" && (
                              <p>*this field must be required</p>
                            )}

                            {errors?.company?.type === "minLength" && (
                              <p>Minimum 3 character username</p>
                            )}
                            {errors?.company?.type === "pattern" && (
                              <p>space not allow</p>
                            )}
                          </div>
                          {/* <Input
                            className={Styles.Infoinput}
                            placeholder="Company URL"
                            variant="grey"
                          /> */}
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Company URL"
                            variant="grey"
                            type="companyUrl"
                            name="companyUrl"
                            reference={register("companyUrl", {
                              required: true,
                              minLength: 3,
                              pattern:
                                /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                            })}
                          />
                          <div className={Styles.errorMsg}>
                            {errors?.companyUrl?.type === "required" && (
                              <p>*this field must be required</p>
                            )}

                            {errors?.companyUrl?.type === "minLength" && (
                              <p>Minimum 5 character(digit) Url</p>
                            )}
                            {errors?.companyUrl?.type === "pattern" && (
                              <p>please fill valid url</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <div className={Styles.checboxMain}>
                    {/* <CheckBox
                      variant="gray"
                      className={`${Styles.check} ${"mb20"}`}
                      
                    /> */}
                    {/* <CheckBox  variant="gray"
                      className={`${Styles.check} ${"mb20"}`}
                     name="checkbox" id="check" 
                        reference={register("checkbox", { required: "*required" })}
                    /> */}
                    <CheckBox
                      variant="gray"
                      labelName={
                        <div className={Styles.tncText}>
                          <Text className={Styles.instructionText}>
                            "I have read, understand, and agree to the entire
                            Master License and Online Service Agreement "
                          </Text>
                        </div>
                      }
                      id="checkBox"
                      checkBoxName={"checkbox"}
                      reference={register("checkbox", {
                        required: "required",
                      })}
                    />
                    <div className={Styles.errorMsg}>
                      {errors.checkbox ? (
                        <div>{errors.checkbox.message}</div>
                      ) : null}
                    </div>

                    {/* <div className={Styles.tncText}>
                      <Text className={Styles.instructionText}>
                        "I have read, understand, and agree to the entire Master
                        License and Online Service Agreement "
                      </Text>
                    </div> */}
                  </div>
                  <div className={Styles.buttonMain}>
                    <Button
                      btnClass={Styles.cnfBtn}
                      size={"xlmd"}
                      variant={"solidPrimary"}
                      // btnHandler={canNotLogin}
                      btnHandler={handleSubmit(onSubmit)}
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              </div>
              <div className={Styles.secondMainCard}>
                <Card className={Styles.ImageCard}>
                  <Heading
                    className={Styles.accountHead}
                    color={"secondary"}
                    headingType={"h2"}
                  >
                    TechnoMile Intelligence Suite
                  </Heading>
                  <Image
                    className={Styles.technoMileImg}
                    src="assets/images/TechnoMile_elements.jpg"
                    alt={"Logo"}
                  />
                </Card>
              </div>
            </div>
          </Modal>
        )}
        {canLogin && (
          <Modal className={Styles.multifactorMainBox}>
            <div className={Styles.factorContent}>
              <Heading
                className={Styles.accountHead}
                color={"secondary"}
                headingType={"h1"}
              >
                {" "}
                Congrats{" "}
              </Heading>
              <Text className={Styles.factorText} variant="xxxlText">
                Almost there please confirm Multi-Factor Authentication by
                checking your email. Once you click next you will be asked to
                enter the code found in your email you have provided.
              </Text>
              <div className={Styles.nextBtn}>
                <Button
                  btnClass={Styles.nextButon}
                  size={"xlsm"}
                  variant={"solidPrimary"}
                  btnHandler={() => {
                    showMultiFactor();
                    setCanLogin(false);
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
      {/* Right Side Box */}
      <div className={Styles.resourCes}>
        <div className={Styles.resourCesBox}>
          <Heading
            className={Styles.featured}
            headingType={"h1"}
            color={"secondary"}
          >
            Featured Resources
          </Heading>
          <div className={Styles.firstImgBox}>
            <Image
              className={Styles.rightImages}
              src="assets/images/elevate.jpg"
              alt={"Logo"}
            />
            <div className={Styles.righSecImage}>
              <Image
                className={Styles.rightImages}
                src="assets/images/intelligenceResearch.jpg"
                alt={"Logo"}
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
