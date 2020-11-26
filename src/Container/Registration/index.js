import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Pagetwo from '../Pagetwo';
import './style.css';

const Registration = () => {
    return (
        <Container className="containers">
            <Row></Row>
            <Row>
                <Col md="1"></Col>
                <Col style={{padding:"5px"}}>   
                    <form className="forms" onSubmit="/next">
                        <Col>
                            <div>
                                <div className="res"><label for="exampleInputEmail1">Register</label><br /></div>
                                <div className="withs"><span>With</span></div>
                            </div>
                            <div>
                                <button className="btng">Google</button>
                                <button className="btnf">Facebook</button><br />
                                <div className="ors"><span>Or</span></div>
                            </div>
                        </Col>
                        <Col>
                            <div class="form-group">
                                <label style={{marginLeft:"5px"}} for="exampleInputEmail1">Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                            </div>
                            <div class="form-group" style={{marginBottom:'50px'}}>
                                <label style={{marginLeft:"5px"}} for="exampleInputEmail1">Mobile</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your mobile number" />
                            </div>
                            <div>
                                <button type="submit" class="btndesigns">Student</button>
                                <button type="submit" class="btndesignp">Parents</button>
                                <button type="submit" class="btndesignt">Teacher</button>
                            </div>

                            <div class="form-group" style={{marginTop:'50px'}}>
                                <label style={{marginLeft:"5px"}} for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                            </div>
                        </Col>
                            
                        <Col>
                            <button type="submit" class="btndesign">Next</button><br />
                            <div className="actc">Already have a account? <strong style={{color:'tomato'}} >Login</strong></div>
                        </Col>
                        
                        
                    </form>
                </Col>
                <Col md="2"></Col>
            </Row>
            <Row></Row>
        </Container>
    )
}

export default Registration 