import React, { useState } from "react";
import Image from "../../../components/shared/image/image";
import Styles from "./login.module.scss";
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
// import { Card } from '@mui/material';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';

const Login = () => {
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
                  className={Styles.inputEmail}
                  variant="border"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                />
              </div>
              <div className={Styles.btnMain}>
                <Button
                  size={"xxlg"}
                  btnClass={Styles.continueBtn}
                  variant={"solidPrimary"}
                  btnHandler={showDetails}
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
                <Input
                  className={Styles.inputEmail}
                  variant="border"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                />

                <div className={Styles.pswBox}>
                  <Input
                    className={Styles.inputEmail}
                    placeholder="Enter Your Password"
                    type="password"
                    variant="border"
                  />
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
                  btnHandler={showMultiFactor}
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
                onChange={setOTP}
              />
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
                btnHandler={showDetails}
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
                        <Input
                          className={Styles.Infoinput}
                          placeholder="First  Name"
                          variant="grey"
                        />
                        <Input
                          className={Styles.Infoinput}
                          placeholder="Phone"
                          variant="grey"
                        />
                        <Input
                          className={Styles.Infoinput}
                          placeholder="Title / Role"
                          variant="grey"
                        />

                        <div className={Styles.arrowInput}>
                          <Select
                            className={Styles.empInput}
                            IconComponent={() => null}
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
                      </div>
                      <div className={Styles.SecondInput}>
                        <div className={Styles.accountInfoBox}>
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Last Name"
                            variant="grey"
                          />
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Phone"
                            variant="grey"
                          />
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Company"
                            variant="grey"
                          />
                          <Input
                            className={Styles.Infoinput}
                            placeholder="Company URL"
                            variant="grey"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                  <div className={Styles.checboxMain}>
                    <CheckBox
                      variant="gray"
                      className={`${Styles.check} ${"mb20"}`}
                    />
                    <div className={Styles.tncText}>
                      <Text className={Styles.instructionText}>
                        "I have read, understand, and agree to the entire Master
                        License and Online Service Agreement "
                      </Text>
                    </div>
                  </div>
                  <div className={Styles.buttonMain}>
                    <Button
                      btnClass={Styles.cnfBtn}
                      size={"xlmd"}
                      variant={"solidPrimary"}
                      btnHandler={canNotLogin}
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
