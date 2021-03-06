import React, {Component, Fragment} from 'react';
import {injectIntl} from 'react-intl';
import {
    Button,
    Card,
    CardBody, CardSubtitle,
    CardTitle, CustomInput, FormGroup, Input,
    InputGroup,
    InputGroupAddon, Label, Modal, ModalBody, ModalFooter, ModalHeader,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row
} from 'reactstrap';
import {Colxx, Separator} from '../../../../components/common/CustomBootstrap';
import IntlMessages from "../../../../helpers/IntlMessages";
import CardText from "reactstrap/es/CardText";
import {Form, Formik} from "formik";
import {FormikCustomCheckbox} from "../../../../containers/form-validations/FormikFields";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import * as ReactDOM from "react-dom";
import EthereumHeader from "../../img/ethereum-pos.jpg";
import EthereumBar from "../../img/chart2.png";
import EthereumGraph from "../../img/chart1.png";
import EthereumHeader2 from "../../img/ethereum-pos2.png";
import CardImg from "reactstrap/es/CardImg";
import LineChart from "../../../../components/charts/Line";
import {lineChartData} from "../../../../data/charts";
import GenerateKeys from "../../img/generate-keys.jpg";
import Careful from "../../img/careful.jpg";
import Deposit from "../../img/deposit.jpg";
import ModalUi from "../../ui/components/modal";
import menuTypes from "../../menu/types"

const SignupSchema = Yup.object().shape({
    checkboxCustomSingle: Yup.bool().oneOf([true], "Must agree to this")
});

class OverviewDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            modal: false,
            modalRight: false,
            modalLarge: false,
            modalSmall: false,
            modalLong: false,
            modalBack: false,
            backdrop: true
        };

        //const e = () => menuTypes.changeDefaultMenuType(e, "menu-hidden");
        //menuTypes.changeDefaultMenuType("e", "menu-hidden");
    }

    changeDefaultMenuType = (e, containerClassnames) => {
        menuTypes.changeDefaultMenuType(e, containerClassnames);
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    handleSubmit = (values, {setSubmitting}) => {
        this.toggle();

        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
    };

    changePage = () => {
        window.location.href = '/app/dashboards/nf/generate';
    };

    render() {
        const {messages} = this.props.intl;
        return (
            <Fragment>
                {/* Page Navigation */}
                <Row>
                    <Colxx xxs="12">
                        <Pagination
                            size="sm"
                            aria-label="Page navigation example"
                            listClassName="justify-content-center"
                        >
                            <PaginationItem disabled>
                                <PaginationLink className="prev" href="#">
                                    <i className="simple-icon-arrow-left"/>
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="generate">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="upload">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="connect">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="summary">5</PaginationLink>
                            </PaginationItem>
                            {/*
                            <PaginationItem disabled>
                                <PaginationLink className="next" href="#">
                                    <i className="simple-icon-arrow-right"/>
                                </PaginationLink>
                            </PaginationItem>
                            */}
                        </Pagination>
                    </Colxx>
                </Row>

                {/* Header */}
                <Row>
                    <Colxx xxs="12">
                        <h2>
                            Overview
                        </h2>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>

                <Row>
                    <Colxx>
                        <Card>
                            <img id="ethereum-header" class="mw-20" variant="top" src={EthereumHeader2}/>

                            <CardBody>

                                {/* LineChart
                                <Row>
                                    <Colxx xxs="12" lg="6" className="mb-5">
                                        <CardSubtitle>
                                            Hejhej
                                        </CardSubtitle>
                                        <div className="chart-container">
                                            <LineChart shadow data={lineChartData} />
                                        </div>
                                    </Colxx>
                                </Row>
                                */}

                                {/* EthereumBar */}
                                <div className="div-centered">
                                    <h2>Network status</h2>
                                    <p>
                                        <b>12,512 ETH</b> in the network and counting<br/>
                                        The eth2 network need to reach at least <b>524,288 ETH</b> (16,284 validators)
                                        to launch its mainnet.
                                    </p>
                                </div>

                                <img class="ethereum-chart" src={EthereumBar} alt="Ethereum Bar" width="700"/>

                                {/* EthereumChart */}
                                <div className="div-centered">
                                    <h2>Staking and rewards</h2>
                                    <p>
                                        Once the mainnet has launched, validators get rewarded for attesting and
                                        proposing blocks.<br/>
                                        The rewards are tied to the overall amount of ETH staked in the network.
                                    </p>
                                </div>

                                <img class="ethereum-chart" src={EthereumGraph} alt="Ethereum Graph" width="700"/>

                                {/* Warnings */}
                                <div className="div-centered">
                                    <h2>Precautions</h2>
                                    <p>
                                        You are about to become a validator of the Ethereum network. Each validation
                                        requires a staking of 32 ETH.<br/>
                                        <br/>
                                        Due to the risk of phishing we recommend that you:<br/>

                                        1. Make sure that you are using the official staking website by Ethereum
                                        Foundation by manually entering the URL to this website and refreshing it.
                                        <br/>
                                        2. Do not copy/paste a wallet address.
                                    </p>
                                </div>

                                {/* 3 easy steps */}
                                <div className="div-centered">
                                    <Row class="bg-primary">
                                        <Colxx>
                                            <img className="small-pics" src={Careful} alt="Careful"
                                                 width="90%"/>
                                            <p>
                                                <b>Proceed with caution</b><br/>
                                                The new eth2 network can only work successfully if
                                                validators understand their responsibilities and risks.
                                            </p>
                                        </Colxx>

                                        <Colxx>
                                            <img className="small-pics" src={GenerateKeys}
                                                 alt="Ethereum Bar" width="90%"/>
                                            <p>
                                                <b>Generate validator keys offline</b><br/>
                                                In order to register on the blockchain you need to
                                                register a keypair and upload the public key.
                                            </p>
                                        </Colxx>

                                        <Colxx>
                                            <img className="small-pics" src={Deposit} alt="Ethereum Bar"
                                                 width="90%"/>
                                            <p>
                                                <b>Deposit ETH in exchange for bETH</b><br/>
                                                After depositing 32 ETH per validator you receive 32 bETH
                                                and become an important part of the network!
                                            </p>
                                        </Colxx>
                                    </Row>
                                </div>



                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Button color="primary" onClick={this.changePage}>
                                        Become a validator
                                    </Button>
                                </div>

                                {/*
                                <Button
                                    outline
                                    color="primary"
                                    className="mb-2"
                                    onClick={e => this.changeDefaultMenuType(e, "menu-hidden")}
                                >
                                    <IntlMessages id="menu.hidden" />
                                </Button>
                                */}

                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

            </Fragment>
        );
    }
}


export default injectIntl(OverviewDashboard);

