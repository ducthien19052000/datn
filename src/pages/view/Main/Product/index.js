import { DeleteTwoTone, EditTwoTone, ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Card, Col, Image, Row, Select } from 'antd'
import Search from 'antd/lib/input/Search'
import React from 'react'
import './index.css'

const Product = () => {
    
    return (
        <>
            <Row className='container-main-product' >
                <Col span={22} style={{margin:'0 auto'}}>
                <Row className='content-food'>
                        <h2>Menu của nhà hàng</h2>  
                </Row>
                <Row style={{background:'#eeeeee'}}>
                <Col span={8}>
                    <Row style={{margin:'20px'}}>
                    <Col span={18} push={6}>
                    <Select size={"small"} defaultValue="Tất cả"  style={{ width: 200 }}>
                            a
                        </Select>
                    </Col>
                    <Col span={6} pull={18}>
                        Danh mục
                    </Col>
                    </Row>
                </Col>
                    <Col span={8} offset={8}>
                        <Row style={{margin:'20px'}}>
                        
                            <Col span={16} offset={8}>
                            <Col>
                            <Search placeholder="input search food"  enterButton />

                            </Col>
                            </Col>
                            
                        </Row>
                    
                    </Col>
                </Row>
                
                <Row >
                 <Col span={16} className='menu-food-col'>
                     <Row className='row-food-all' style={{margin:0}}>
                       <Col span={24}>
                       <Row>
                           <Col flex={4}>
                               <h4 className="name-cate-food">Các món gà</h4>
                           </Col>
                           <Col flex={1} style={{textAlign:"right"}}> <Button className='btn-see-more'>Xem thêm</Button></Col>
                         </Row>
                         <Row style={{margin:0}}>
                        
                        <Card
                            style={{ width: "24%" ,margin:'4px'}}
                            cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                            actions={[
                                <ShoppingCartOutlined />
                           
                            ]}
                        >
                              <p>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                        </Card>
                        <Card
                             style={{ width: "24%" ,margin:'4px'}}
                            cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                            actions={[
                                <ShoppingCartOutlined />
                           
                            ]}
                        >
                              <p>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                        </Card>
                        <Card
                            style={{ width: "24%" ,margin:'4px'}}
                            cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                            actions={[
                                <ShoppingCartOutlined />
                           
                            ]}
                        >
                              <p>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                        </Card>
                        <Card
                             style={{ width: "24%" ,margin:'4px'}}
                            cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                            actions={[
                                <ShoppingCartOutlined />
                           
                            ]}
                        >
                              <p>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                        </Card>
                     
                         </Row>
                       </Col>
                     </Row>
                     <Row className='row-food-all' style={{margin:'20px 0 0 0 '}}>
                       <Col span={24}>
                       <Row>
                           <Col flex={4}>
                               <h4 className="name-cate-food">Các món gà</h4>
                           </Col>
                           <Col flex={1} style={{textAlign:"right"}}> <Button className='btn-see-more'>Xem thêm</Button></Col>
                         </Row>
                         <Row style={{margin:0}}>
                        
                        <Card
                            style={{ width: "24%" ,margin:'4px'}}
                            cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                            actions={[
                                <ShoppingCartOutlined />
                           
                            ]}
                        >
                              <p>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                        </Card>
                        <Card
                             style={{ width: "24%" ,margin:'4px'}}
                            cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                            actions={[
                                <ShoppingCartOutlined />
                           
                            ]}
                        >
                              <p>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                        </Card>
                        <Card
                            style={{ width: "24%" ,margin:'4px'}}
                            cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                            actions={[
                                <ShoppingCartOutlined />
                           
                            ]}
                        >
                              <p>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                        </Card>
                        <Card
                             style={{ width: "24%" ,margin:'4px'}}
                            cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                            actions={[
                                <ShoppingCartOutlined />
                           
                            ]}
                        >
                              <p>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                        </Card>
                     
                         </Row>
                       </Col>
                     </Row>
                  </Col>
                  <Col span={8}>
                      <Row className='row-show-cart' style={{margin:0}}>
                      
                         <Col span={24}>
                         <div style={{position: 'absolute', top: '-20px', right: '10px', backgroundColor: 'rgb(235, 113, 0)', borderRadius: '50px', width: '80px', height: '80px', border: '12px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><ShoppingCartOutlined   /></div>
                         <Row style={{background:'white',height:50,paddingTop:'10px'}}>
                                <h2>Số món</h2>
                            </Row>
                            <Row>
                                <Col span={6} style={{padding:'5px'}}>
                                    <Image src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png"/>
                                </Col>
                                <Col span={18}>
                                <Row style={{margin:0}}>
                                    <Col span={12}> <span style={{fontSize:16,fontWeight:500}} >GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN x1</span> </Col>
                                    <Col span ={12}>
                                        <Row style={{margin:0}}>
                                        <span style={{fontSize:16,fontWeight:500}} >350.000 VNĐ</span>
                                        </Row>
                                        <Row  style={{margin:0}}>
                                                <Button style={{background:'none',border:'none'}}> <EditTwoTone /></Button>
                                                <Button  style={{background:'none',border:'none'}}> <DeleteTwoTone /></Button>
                                        </Row>
                                        
                                          </Col>
                                </Row>
                                    </Col>

                            </Row>
                            <Row className='row-price-cart'>
                                <Col span={8}>
                                    <h3>Tổng giá</h3>
                                </Col>
                                <Col span={16}></Col>
                            </Row>
                         </Col>
                           
                      </Row>
                  </Col>
                </Row>
                </Col>
                
            </Row>
          
        </>
    )
}

export default Product
