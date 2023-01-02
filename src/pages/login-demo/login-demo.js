import React, { useState } from "react";
import Styles from "./login-demo.module.scss";
import {
  Input,
  Button,
  Heading,
  Text,
  Modal,
  CheckBox,
  Icon,
  Card,
  Image,
} from "../../components/shared/index";
import OtpInput from "react-otp-input";
// import { Card } from '@mui/material';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";

// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';

const LoginDemo = () => {
  const [OTP, setOTP] = useState("");
  const [show, setShow] = useState(false);
  const [showHide, setShowHide] = useState(true);
  const [hideLogin, setHideLogin] = useState(true);
  const [showFactor, setShowFactor] = useState(false);
  const [showForgat, setShowForgat] = useState(false);
  const [notLogin, setnotLogin] = useState(false);
  const [canLogin, setCanLogin] = useState(false);
  const [showselect, setSelect] = useState(false);
  const [selected, setSelected] = useState("1");
  const [showErrors, setErrors] = useState({});
  const setError = (error) => {
    setErrors({ ...showErrors, otpInput: error });
  };
  const handleOTPChange = (inputOTP) => {
    setOTP(inputOTP);
    if (inputOTP.length <= 5) {
      setError({ message: "Please enter 6 digits OTP" });
    } else {
      setError("");
    }
    
  };
  console.table(showErrors);
  console.table(OTP);
  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
    setSelect(false);
    console.table(errors);
  };

  const showDetails = () => {
    setShow(true);
    setShowHide(false);
  };
  const showMultiFactor = () => {
    setShow(false);
    setShowHide(false);
    setShowFactor(true);
    setHideLogin(false);
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
    setHideLogin(false);
  };
  const canNotLogin = () => {
    setShow(false);
    setShowHide(false);
    setShowFactor(false);
    setShowForgat(false);
    setnotLogin(false);
    setCanLogin(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = () => {
    console.table(errors);
    showDetails();
  };
  const onLogin = () => {
    console.table(errors);
    showMultiFactor();
  };
  const callForgetFunction = () => {
    console.table(errors);
    showPass();
  };
  const callConfirmFunction = () => {
    console.table(errors);
    canNotLogin();
  };
  const callMultiFactorAuthentication = (data) => {
    console.table(errors);
    console.table(data);
    showDetails();
    showMultiFactor(false);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.technoMile}>
        <div className={Styles.imageBox}>
          <Image src="assets/images/logo.png" alt={"Logo"} />
        </div>
        {/* Login Card Start here */}
        {hideLogin && (
          <div className={Styles.mainCard}>
            <div className={Styles.mainBox}>
              <Heading
                className={Styles.mainHead}
                color={"secondary"}
                headingType={"h1"}
              >
                {show ? "Sign in" : "Password"}
              </Heading>
              <Text
                className={Styles.mainText}
                variant={"mlgText"}
                color={""}
                strong={"strong4"}
              >
                {show
                  ? "Enter your password to continue."
                  : "Enter your email address to sign in."}
              </Text>
              {showHide && (
                <div className={Styles.inputMain}>
                  <Input
                    variant="border"
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    reference={register("email", {
                      required: "*Please enter email address.",
                      validate: (value) => {
                        return (
                          [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i].every(
                            (pattern) => pattern.test(value)
                          ) || "Alphabetical characters only"
                        );
                      },
                    })}
                  />
                  <div className={Styles.errorMsg}>
                    {errors.email ? <div>{errors.email.message}</div> : null}
                  </div>
                </div>
              )}
              {show && (
                <>
                  <div className={Styles.inputMain}>
                    <Input
                      variant="border"
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
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
                        <p>*Alphabetical characters only</p>
                      )}
                    </div>

                    <div className={Styles.inputSec}>
                      <Input
                        className={Styles.passText}
                        placeholder="Enter Your Password"
                        type="password"
                        variant="border"
                        reference={register("password", {
                          required: "*required",
                          minLength: {
                            value: 8,
                            message: "must be 8 chars",
                          },
                          maxLength: {
                            value: 20,
                            message: "must be 20 chars only",
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
                      variant={"smText"}
                      color={"black"}
                      strong={"strong4"}
                      handleClick={showForgatData}
                    >
                      forgot password?
                    </Text>
                  </div>
                </>
              )}
              {showHide && (
                <div className={Styles.btnMain}>
                  <Button
                    size={"xxlg"}
                    variant={"solidPrimary"}
                    // btnHandler={showDetails}
                    btnHandler={handleSubmit(onSubmit)}
                  >
                    Continue
                  </Button>
                </div>
              )}
              {show && (
                <div className={Styles.btnMain}>
                  <Button
                    size={"xxlg"}
                    variant={"solidPrimary"}
                    btnHandler={handleSubmit(onLogin)}
                    // btnHandler={showMultiFactor}
                  >
                    Continue
                  </Button>
                </div>
              )}

              <Text
                className={Styles.secText}
                variant={"smText"}
                color={"black"}
                strong={"strong4"}
                handleClick={shownotLogin}
              >
                {show ? "Can’t Sign in?" : " Can’t Login?"}
              </Text>
            </div>
          </div>
        )}
        {/* Multifactor Card  */}

        {showFactor && (
          <Modal className={Styles.multifactorMainBox}>
            <div className={Styles.authenticHeading}>
              <Heading color={"secondary"} headingType={"h1"}>
                Multi-Factor{" "}
              </Heading>
              <Heading
                className={Styles.autoHead}
                color={"secondary"}
                headingType={"h1"}
              >
                Authentication
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
              {/* <OtpInput
                inputStyle={Styles.inputTab}
                containerStyle={Styles.numInput}
                numInputs={6}
                value={OTP}
                onChange={setOTP}
                name="otpInput"
                // {...register("otpInput", {
                //     required: "required",
                //   })}
                ref={register("otpInput", { required: "required" })}
              /> */}
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
                variant={"solidPrimary"}
                btnHandler={handleSubmit(callMultiFactorAuthentication)}
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
                Please Enter your Your verify E-mail id
              </Text>
              <div className={Styles.inptBox}>
                <Input
                  className={Styles.passText}
                  type="email"
                  placeholder={"Enter email"}
                  variant="border"
                  reference={register("emailForget", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                <div className={Styles.errorMsg}>
                  {errors?.emailForget?.type === "required" && (
                    <p>*Please enter email address.</p>
                  )}

                  {errors?.emailForget?.type === "pattern" && (
                    <p>*Alphabetical characters only</p>
                  )}
                </div>
              </div>
              <div className={Styles.btnMain}>
                <Button
                  btnHandler={handleSubmit(callForgetFunction)}
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
          <Modal
            bodyVariant={Styles.confirmInformationBody}
            className={Styles.transparent}
          >
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
                        <Input
                          className={Styles.Infoinput}
                          placeholder="First  Name"
                          variant="grey"
                          name="firstName"
                          reference={register("firstName", {
                            required: "required",
                            minLength: {
                              value: 2,
                              message: "char length must be 2",
                            },
                            maxLength: {
                              value: 20,
                              message: "Char length must be 20",
                            },
                            pattern: {
                              value: /^[A-Za-z]+$/,
                              message:
                                "Please enter valid first name (alphabet only)",
                            },
                          })}
                        />
                        <div className={`${"mb0"} ${Styles.errorMsg}`}>
                          {errors.firstName ? (
                            <div>{errors.firstName.message}</div>
                          ) : null}
                        </div>
                        <Input
                          className={Styles.Infoinput}
                          placeholder="Phone"
                          variant="grey"
                          name="Phone"
                          reference={register("Phone", {
                            required: "required",
                            minLength: {
                              value: 10,
                              message: "Enter 10 digits only",
                            },
                            maxLength: {
                              value: 10,
                              message: "only 10 digits are allowed to Enter",
                            },
                            pattern: {
                              value: /^\d{10}$/,
                              message:
                                "Please enter valid phone number (10 digits)",
                            },
                          })}
                        />
                        <div className={Styles.errorMsg}>
                          {errors.Phone ? (
                            <div>{errors.Phone.message}</div>
                          ) : null}
                        </div>
                        <Input
                          className={Styles.Infoinput}
                          placeholder="Title / Role"
                          variant="grey"
                          name="title"
                          reference={register("title", {
                            required: "required",
                            minLength: {
                              value: 2,
                              message:
                                "Please enter valid title/role (at least 2 characters)",
                            },
                            maxLength: {
                              value: 30,
                              message:
                                "Please enter valid title/role (only 30 characters)",
                            },
                            pattern: {
                              value: /^[A-Za-z]+$/,
                              message:
                                "Please enter valid Title / Role (alphabet only)",
                            },
                          })}
                        />
                        <div className={Styles.errorMsg}>
                          {errors.title ? (
                            <div>{errors.title.message}</div>
                          ) : null}
                        </div>

                        <div className={Styles.arrowInput}>
                          {/* <Input className={Styles.empInput} placeholder="# of Employees" variant="grey" /> */}
                          {/* <Select
                            className={Styles.empInput}
                            IconComponent={() => null}
                            sx={{
                              boxShadow: "none",
                              ".MuiOutlinedInput-notchedOutline": { border: 0 },
                            }}
                            value={selected}
                            onChange={selectionChangeHandler}
                            open={showselect}
                            name="select"
                            inputRef={register("select", {
                              required: "required",
                            })}

                          > */}
                          <Select
                            name="select"
                            className={Styles.empInput}
                            IconComponent={() => null}
                            sx={{
                              boxShadow: "none",
                              ".MuiOutlinedInput-notchedOutline": { border: 0 },
                            }}
                            id="select"
                            value={selected}
                            onChange={selectionChangeHandler}
                            open={showselect}
                            inputRef={register("select", {
                              required: "required",
                              validate: (value) =>
                                value !== "1" || "Please select an option",
                            })}
                            error={!!errors.name}
                          >
                            <MenuItem value="1"># No of Employee</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                          </Select>
                          {/* <Input className={Styles.empInputTwo} variant="grey" /> */}

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
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Last Name"
                            variant="grey"
                            name="lastName"
                            reference={register("lastName", {
                              required: "required",
                              minLength: {
                                value: 2,
                                message: "char length must be 2",
                              },
                              maxLength: {
                                value: 20,
                                message: "Char length must be 20",
                              },
                              pattern: {
                                value: /^[A-Za-z]+$/,
                                message:
                                  "Please enter valid last name (alphabet only)",
                              },
                            })}
                          />
                          <div className={Styles.errorMsg}>
                            {errors.lastName ? (
                              <div>{errors.lastName.message}</div>
                            ) : null}
                          </div>
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Phone"
                            variant="grey"
                            name="PhoneSecond"
                            reference={register("PhoneSecond", {
                              required: "required",
                              minLength: {
                                value: 10,
                                message: "Enter 10 digits only",
                              },
                              maxLength: {
                                value: 10,
                                message: "only 10 digits are allowed",
                              },
                              pattern: {
                                value: /^\d{10}$/,
                                message:
                                  "Please enter valid phone number (10 digits)",
                              },

                              // validate: (value) => {
                              //   return (
                              //     /^\d{10}$/.every(
                              //       (pattern) => pattern.test(value)
                              //     ) ||
                              //     "Please enter valid phone number (10 digits)"
                              //   );
                              // },
                            })}
                          />
                          <div className={Styles.errorMsg}>
                            {errors.PhoneSecond ? (
                              <div>{errors.PhoneSecond.message}</div>
                            ) : null}
                          </div>
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Company"
                            variant="grey"
                            name="Company"
                            reference={register("Company", {
                              required: "required",
                              minLength: {
                                value: 2,
                                message: "company chars must be 2",
                              },
                              maxLength: {
                                value: 15,
                                message: "company chars length must be 15",
                              },
                              pattern: {
                                value: /^[A-Za-z]+$/,
                                message:
                                  "Please enter Company Name (alphabet only)",
                              },
                            })}
                          />
                          <div className={Styles.errorMsg}>
                            {errors.Company ? (
                              <div>{errors.Company.message}</div>
                            ) : null}
                          </div>
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Company URL"
                            variant="grey"
                            name="companyUrl"
                            reference={register("companyUrl", {
                              required: "required",
                              pattern: {
                                value:
                                  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                                message:
                                  "Please enter valid company URL (e.g. http://www.example.com)",
                              },
                              // validate: (value) => {
                              //   return (
                              //     /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/ (
                              //       (pattern) => pattern.test(value)
                              //     ) ||
                              //     "Please enter valid company URL (e.g. http://www.example.com)"
                              //   );
                              // },
                            })}
                          />
                          <div className={Styles.errorMsg}>
                            {errors.companyUrl ? (
                              <div>{errors.companyUrl.message}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <div className={Styles.checboxMain}>
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
                      checkBoxName={"checkBox"}
                      reference={register("checkBox", {
                        required: "required",
                      })}
                    />
                    {/* <div className={Styles.tncText}>
                      <Text className={Styles.instructionText}>
                        "I have read, understand, and agree to the entire Master
                        License and Online Service Agreement "
                      </Text>
                    </div> */}
                  </div>
                  <div className={`${Styles.checkError} ${Styles.errorMsg}`}>
                    {errors.checkBox ? (
                      <div>{errors.checkBox.message}</div>
                    ) : null}
                  </div>
                  <div className={Styles.buttonMain}>
                    <Button
                      size={"xlmd"}
                      variant={"solidPrimary"}
                      btnHandler={handleSubmit(callConfirmFunction)}
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              </div>
              <div className={Styles.secondMainCard}>
                <Card>
                  <Heading
                    className={Styles.accountHead}
                    color={"secondary"}
                    headingType={"h2"}
                  >
                    TechnoMile Intelligence Suite
                  </Heading>
                  <Image
                    src="assets/images/TechnoMile_elements.jpg"
                    alt={"Logo"}
                  />
                </Card>
              </div>
              {/* <div className={Styles.secondMainCard}>
                                <Card className={Styles.secondTechnoMainCard}>
                                    <div className={Styles.cartTwo}>
                                        <Heading className={Styles.accountHead} color={"secondary"} headingType={"h2"}>TechnoMile Intelligence Suite</Heading>
                                        <div className={Styles.imgBox}>
                                            <Image src='assets/images/TechnoMile_elements.jpg' alt={"Logo"} />
                                        </div>
                                    </div>
                                </Card>
                            </div> */}
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
            <Image src="assets/images/elevate.jpg" alt={"Logo"} />
          </div>

          <div>
            <Image src="assets/images/intelligenceResearch.jpg" alt={"Logo"} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LoginDemo;
