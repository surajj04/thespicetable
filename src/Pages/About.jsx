import React from 'react'

export default function About() {
    return (
        <div>
            <div className="text-white" style={{ paddingTop: "8rem", width: "75%", margin: "auto" }}>
                <div className="my-8 hidden max-sm:block">
                    <img className="w-[90%] rounded-md" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" alt="" />
                </div>
                <div className="grid grid-cols-2 max-sm:block" style={{ marginTop: "3rem" }}>
                    <div className="">
                        <h2 className="text-2xl max-sm:leading-10">
                            Welcome to
                            <span className="title-font" style={{ fontSize: 30 }}>
                                &ensp;The spice table
                            </span>
                        </h2>
                        <p className="my-4 w-3/4 text-sm max-sm:w-full">
                            At Kitchen | Cafe &amp; Resto, we are passionate about creating
                            unforgettable culinary experiences that delight the senses and bring
                            people together. Nestled in the heart of PUNE, our restaurant is more
                            than just a place to dine; it's a haven for food enthusiasts, coffee
                            connoisseurs, and anyone seeking a warm and inviting atmosphere.
                        </p>
                    </div>
                    <div className="my-8 max-sm:hidden">
                        <img
                            className="w-[90%] rounded-md"
                            src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
                            alt="Restaurant image"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 max-sm:block" style={{ marginTop: "3rem" }}>
                    <div className="my-8">
                        <img className="w-[90%] rounded-md" src="img/food/story.jpeg" alt="" />
                    </div>
                    <div className="my-8" style={{ margin: "0px 1rem" }}>
                        <p className="text-2xl">Our Story</p>
                        <p className="text-sm my-4">
                            Founded in 1999, Kitchen | Cafe &amp; Resto was born out of a shared
                            love for food, community, and the belief that every meal should be a
                            memorable affair. With years of experience in the culinary world, our
                            dedicated team came together to create a unique dining destination that
                            combines the charm of a cafe with the sophistication of a restaurant.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 max-sm:block" style={{ marginTop: "3rem" }}>
                    <div className="my-8 hidden max-sm:block">
                        <img className="w-[90%] rounded-md" src="/img/food/events.jpg" alt="" />
                    </div>
                    <div className="">
                        <p className="text-2xl"> Community &amp; Events</p>
                        <p className="text-sm my-4">
                            We believe that a great restaurant should be a gathering place for the
                            community. That's why we regularly host events, live music nights, and
                            special promotions to bring people together. Whether it's a themed
                            dinner, a cooking workshop, or a charity fundraiser, we strive to be an
                            integral part of the local community.
                        </p>
                    </div>
                    <div className="my-8 max-sm:hidden">
                        <img className="w-[90%] rounded-md" src="/img/food/events.jpg" alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 max-sm:block" style={{ marginTop: "3rem" }}>
                    <div className="my-8">
                        <img className="w-[90%] rounded-md" src="/img/food/team.jpg" alt="" />
                    </div>
                    <div className="my-8" style={{ margin: "0px 1rem" }}>
                        <p className="text-2xl">Team</p>
                        <p className="text-sm my-4">
                            Our dedicated team is the heart and soul of Kitchen | Cafe &amp; Resto.
                            From our talented chefs who craft exquisite dishes to our friendly
                            waitstaff who provide exceptional service, we are committed to ensuring
                            that every visit to our restaurant is a memorable one.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
