import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './forms.css';
import Footer from '../Footer.jsx'


class Employees extends Component {

    nextStep = (values) => {
        values.preventDefault();

        let employee = values.currentTarget.dataset.value;

        this.props.setEmployees(employee);

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
    
        const lp = urlParams.get('lp_request_id');
        const zip = urlParams.get('zip_code');
        const businessName = urlParams.get('legal_business_name');
        const gclid = urlParams.get('gclid');

        const coverageTypes = urlParams.get('coverage_type');
        const structure = urlParams.get('business_structure');
        const profession = urlParams.get('business_profession');
        const year = urlParams.get('year_business_founded');
        const revenue = urlParams.get('annual_revenue_over_next_12_months');
    
        this.props.history.push('/address' + '?lp_request_id=' + lp + '&gclid=' + gclid + '&zip_code=' + zip + '&legal_business_name=' + businessName + '&coverage_type=' + coverageTypes + '&business_structure=' + structure + '&business_profession=' + profession + '&year_business_founded=' + year + '&annual_revenue_over_next_12_months=' + revenue + '&number_of_employees=' + employee);

    }

    render() {
        return (
            <div>
                 <div className="back bg-white">
                <div className="bg-blue-500 headerText justify-center align-middle text-center">
                    <h2>Get Your Free Businness Insurance Quote</h2>
                </div>
                <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
                    <div className="px-4 py-8 sm:px-10">


                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">

                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        41%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                <div style={{ width: "41%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                            </div>
                        </div>


                        <div className="test">
                            <div className="mt-6">

                                <div>
                                    <div className="relative flex justify-center text-sm leading-5 con">
                                        <span className="px-2 text-black-500 text-3xl bold header">
                                           How Many Employees Do You Currently Have?
                                        </span>
                                    </div>
                                </div>
                                <form onSubmit={this.nextStep} >
                                    <div className="mt-6">
                                        <div className="w-full flex text-sm leading-5">

                                            <div className="text-sm leading-5 buttonBlockRow">



                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="10" onClick={(values) => this.nextStep(values)}>1-10</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="50" onClick={(values) => this.nextStep(values)}>11-5-</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="100" onClick={(values) => this.nextStep(values)}>51-100</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="250" onClick={(values) => this.nextStep(values)}>101-250</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="500" onClick={(values) => this.nextStep(values)}>251-500</button>

                                                <button className="monthButton bg-blue-500 rounded text-white font-bold" data-config-id="05_button" type="button" data-value="501" onClick={(values) => this.nextStep(values)}>501+</button>

                                               

                                            </div>
                                        </div>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>




                </div>
                <Footer />


            </div>
            </div>
        )
    }
}


export default withRouter(Employees)