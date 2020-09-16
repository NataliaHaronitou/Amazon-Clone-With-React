import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="49597668"
                        title="Pokemon TCG: Champion's Path Elite Trainer Box, Multicolor"
                        price={44.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/91mxeC4-MoL._AC_SL1500_.jpg"
                    />

                    <Product
                        id="775399799"
                        title="Pokemon Vivid Voltage Booster Box and Elite Trainer Box Bundle"
                        price={121.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71-1t3RfHcL._AC_SL1500_.jpg"
                    />

                    <Product
                        id="877576579"
                        title="Funko Pop! Games: Pokemon - Bulbasaur"
                        price={8.98}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51DFkMf%2BPKL._AC_SL1300_.jpg"
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="49543509"
                        title="Sony Alpha A6600 Mirrorless Camera"
                        price={1397.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/810GeaLqbNL._AC_SL1500_.jpg"
                    />

                </div>

                <div className="home__row">

                    <Product
                        id="77328094"
                        title="NEW DJI Mavic Air 2 Fly More Combo - Drone Quadcopter UAV with 48MP Camera 4K Video"
                        price={988.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71C2W%2BbBW6L._AC_SL1500_.jpg"
                    />

                    <Product
                        id="87799094"
                        title="Focus V3 tES Device: new and improved tES device by Focus with tDCS, tACS, tPCS, tRNS and tRCS waveforms "
                        price={399.99}
                        rating={5}
                        image="https://www.natural-swimmer.com/images/zapping.jpg"
                    />


                </div>

                <div className="home__row">
                    <Product
                        id="12321341"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses (Paperback)'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3}

                    />
                    <Product
                        id="49538094"
                        title="Kenwwod kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" />

                </div>

                <div className="home__row">
                    <Product
                        id="49586509"
                        title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, One Size (S & L Bands Included)"
                        price={149.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />

                    <Product
                        id="77538094"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />

                    <Product
                        id="87788094"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.98}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="12866341"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        image="https://azcd.harveynorman.com.au/media/catalog/product/h/g/hg90_edit_4.png"
                        rating={4}
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="49577758"
                        title="Brand: Human Kynd - Hire Me T-Shirt"
                        price={24.99}
                        rating={3}
                        image="https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/P778010_01"
                    />

                    <Product
                        id="775399754"
                        title="The Job I Need, Needs Me: Paperback"
                        price={12.98}
                        rating={4}
                        image="https://prodimage.images-bn.com/pimages/2940012914576_p0_v1_s1200x630.jpg"
                    />

                    <Product
                        id="877576579"
                        title="I Cerealsly Love You Engraved Stainless Steel Cereal Spoon For The Team Who Hired You"
                        price={9.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/716L5ySzCaL._AC_SL1500_.jpg"
                    />

                </div>

            </div>
        </div>
    );
}

export default Home;

