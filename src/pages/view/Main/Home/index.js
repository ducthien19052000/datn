import React, { useCallback, useEffect, useState } from 'react'
import {  Row, Image, Carousel, Card, Badge, Button, Drawer, Col, Divider } from 'antd';
import {bindActionCreators} from 'redux'
import * as foodAction from  '../../../../redux/Action/index'
import { connect } from 'react-redux';
import './index.css'
import {Link} from 'react-router-dom'
import { DeleteTwoTone, EditTwoTone, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const Home = ({foodAct,litsFoot}) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
    const fetchEmployee= useCallback(
        () => {
            const { getData } = foodAct;
            getData();
        },
        [foodAct],
    )
    useEffect(() => {
    
        fetchEmployee();
      }, [fetchEmployee]);

      const newProduct = litsFoot.slice(litsFoot.length-6,litsFoot.length)
    return (
        <>
        
             <Row>
                  <Badge count={0}  id="myBtn" overflowCount={10}>
                      <Button shape="circle" style={{background:'none',border:'none'}} onClick={showDrawer}> <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff',margin:0 }} /></Button>
          </Badge>
         
                 
          <Carousel className='carousel-home' >
              
        <div>
          
          <Image style={{width:'100%'}}  src="https://rawcdn.githack.com/0967517236/imag-datn/0fc6d18e91b5f33324b6a1824756dece21d71b8e/img-carousel-home.JPG"/>
        </div>
        
      </Carousel>
          
        </Row >
      
          <div className="site-layout-background" >
        
            <Row  style={{marginLeft:'35px'}}>
             <Row style={{width:'100%',display:"block"}}>
               <h2 style={{float:"left"}} >Món ngon</h2>
               <Link to='/product' type="button" className="ant-btn ant-btn-dashed" style={{float: 'right', marginRight: '30px',  background: '#3ac5c9'}}><span>Xem chi tiết</span></Link>
             </Row>
                <Row>
                    {newProduct.map((food,index)=>(
                               <Card 
                               hoverable
                               style={{ width: '15.5%' , marginRight:'12px'}}
                               cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                               actions={[
                                <SettingOutlined key="setting" />
                                
                              ]}
                             >
                                <p  style={{fontSize:'15px'}}>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                             </Card>
                    )
)}
             
                </Row>
            </Row > 
            <Drawer
        title="Giỏ hàng"
        placement="right"
        width={370}
        onClose={onClose}
        visible={visible}
      >
                         <Col span={24}>
                       
                         <Row style={{backgroundColor:'rgb(238, 238, 238)',minHeight:'30px',padding : '10px 16px'}}>
                                <span style={{fontSize:'16px', fontWeight:500,color :'#16161d'}} >Số món</span>
                         </Row>
                          <Row style={{}} className='row-itemFood-cart`'>
                            <Col span={6} style={{padding:'5px'}}>
                                    <Image src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png"/>
                                </Col>
                                    <Col span={18}> 
                                    <Row>
                                      <Col span={14}>
                                      <span style={{fontSize:16,fontWeight:500}} >GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN x1</span>
                                      </Col>
                                      <Col span={10}>
                                      <span style={{fontSize:16,fontWeight:500}} >350.000 VNĐ</span>
                                      </Col>
                                   
                                    </Row>
                                      <Row> 
                                        <Col span ={16}>
                                       <span>Số lượng : 1</span>
                                        
                                          </Col>
                                          <Col span={8}>
                                            <Row>
                                              <Col span={12}>
                                              <Button style={{background:'none',border:'none'}}> <EditTwoTone /></Button>
                                              </Col>
                                              <Col span={12}>
                                              <Button  style={{background:'none',border:'none'}}> <DeleteTwoTone /></Button>
                                              </Col>
                                          
                                            
                                            </Row>
                                          
                                          </Col>

                                      </Row>
                                     </Col>
                                   
                                </Row>
                                <Divider style={{margin:'12px 0'}} />
                            <Row className='row-price-cart' style={{padding:'12px'}}>
                                <Col span={8}>
                                    <h3 style={{margin:0}}>Tổng giá</h3>
                                </Col>
                                <Col span={16} style={{textAlign:'right'}}>
                                <h3 style={{margin:0}}>350.000 VNĐ</h3>
                                </Col>
                            </Row>
                         </Col>
                           
                   
      </Drawer>
          </div>
        </>
    )
}

const  mapStateToProps= state =>{
    return {
        litsFoot: state.foodData.lists
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        foodAct: bindActionCreators(foodAction,dispatch)
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
