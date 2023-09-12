import React from 'react'
import '../App.css'

export default function Menu(props) {
    return (
        <div className='pt-28  text-white w-9/12 mx-auto max-sm:w-full'>
            <div className="text-4xl text-white text-center my-4">
                <h2 className=' title-font my-5'>The Spice Table</h2>
                <h2 className='text-3xl'>Food Menu</h2>
            </div>

            <div className="grid grid-flow-row w-[90%] max-sm:w-full mx-auto px-4">

                <div className="grid grid-cols-2 mx-auto space-x-40 max-sm:space-x-14">
                    <div className="">
                        <h2 className='text-2xl font-bold my-6'>Appetizers</h2>
                        <div className="">
                            {
                                props.DataMenu.map((ele, i) => {
                                    if (ele.category === "Appetizers") {
                                        return <div className="grid grid-cols-2 my-4">
                                            <div className="">
                                                <p className='text-sm my-auto'>{ele.dish}</p>
                                            </div>
                                            <div className="mx-5">
                                                <p className='bg-red-600 inline-block px-2 rounded-md'>₹{ele.price}</p>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="my-5 max-sm:mt-10">
                        <img className='rounded-full w-56 h-56  max-sm:h-32 max-sm:w-32' src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/IcC9fTgdOC.jpg" alt="" />
                    </div>
                </div>


                <div className="grid grid-cols-2 mx-auto space-x-40 max-sm:grid-col-2 max-sm:space-x-0">
                    <div className="max-sm:mt-10">
                        <img className='rounded-full w-56 h-56 max-sm:h-32 max-sm:w-32' src="https://potatorolls.com/wp-content/uploads/2020/10/Soup-and-Salad-Pair.jpg" alt="" />
                    </div>
                    <div className="">
                        <h2 className='text-2xl font-bold my-6'>Soups and Salads</h2>
                        <div className="">
                            {
                                props.DataMenu.map((ele, i) => {
                                    if (ele.category === "Soups and Salads") {
                                        return <div className="grid grid-cols-2 my-4">
                                            <div className="">
                                                <p className='text-sm my-auto'>{ele.dish}</p>
                                            </div>
                                            <div className="mx-12 max-sm:max-12">
                                                <p className='bg-red-600 inline-block px-2 rounded-md'>₹{ele.price}</p>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 mx-auto space-x-40 max-sm:space-x-0">
                    <div className="">
                        <h2 className='text-2xl font-bold my-6'>Vegetarian Main Course</h2>
                        <div className="">
                            {
                                props.DataMenu.map((ele, i) => {
                                    if (ele.category === "Vegetarian Main Course") {
                                        return <div className="grid grid-cols-2 my-4">
                                            <div className="">
                                                <p className='text-sm my-auto'>{ele.dish}</p>
                                            </div>
                                            <div className="mx-5">
                                                <p className='bg-red-600 inline-block px-2 rounded-md'>₹{ele.price}</p>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="my-5">
                        <img className='rounded-full w-56 h-56 max-sm:h-32 max-sm:w-32 max-sm:mt-20' src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/Articles/High_Protein_Indian_Vegetarian_Main_Course_Recipes_For_Body_Building__Weight_Loss.png" alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-2 mx-auto space-x-40 max-sm:space-x-0">
                    <div className="my-5">
                        <img className='rounded-full w-56 h-56 max-sm:h-32 max-sm:w-32 max-sm:mt-20' src="https://images.indulgexpress.com/uploads/user/imagelibrary/2022/5/12/original/Paneer_Tikka_Biryani_1.jpg" alt="" />
                    </div>
                    <div className="">
                        <h2 className='text-2xl font-bold my-6'>Biryani Specialties</h2>
                        <div className="">
                            {
                                props.DataMenu.map((ele, i) => {
                                    if (ele.category === "Biryani Specialties") {
                                        return <div className="grid grid-cols-2 my-4 ">
                                            <div className="">
                                                <p className='text-sm my-auto'>{ele.dish}</p>
                                            </div>
                                            <div className="">
                                                <p className='bg-red-600 inline-block px-2 rounded-md'>₹{ele.price}</p>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-2 mx-auto space-x-40 max-sm:space-x-0">
                    <div className="">
                        <h2 className='text-2xl font-bold my-6'>Accompaniments</h2>
                        <div className="">
                            {
                                props.DataMenu.map((ele, i) => {
                                    if (ele.category === "Accompaniments") {
                                        return <div className="grid grid-cols-2 my-4">
                                            <div className="">
                                                <p className='text-sm my-auto'>{ele.dish}</p>
                                            </div>
                                            <div className="">
                                                <p className='bg-red-600 inline-block px-2 rounded-md'>₹{ele.price}</p>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="my-5">
                        <img className='rounded-full w-56 h-56 max-sm:h-32 max-sm:w-32 max-sm:mt-10' src="https://www.vegrecipesofindia.com/wp-content/uploads/2022/12/garlic-naan-3.jpg" alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-2 mx-auto space-x-60 max-sm:space-x-0">
                    <div className="my-5">
                        <img className='rounded-full w-56 h-56 max-sm:h-32 max-sm:w-32' src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&resize=500,454" alt="" />
                    </div>
                    <div className="">
                        <h2 className='text-2xl font-bold my-6'>Desserts</h2>
                        <div className="">
                            {
                                props.DataMenu.map((ele, i) => {
                                    if (ele.category === "Desserts") {
                                        return <div className="grid grid-cols-2 my-4 ">
                                            <div className="">
                                                <p className='text-sm my-auto'>{ele.dish}</p>
                                            </div>
                                            <div className="mx-5">
                                                <p className='bg-red-600 inline-block px-2 rounded-md'>₹{ele.price}</p>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
