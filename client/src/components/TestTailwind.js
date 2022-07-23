import React, { Component } from 'react';
import "../tailwind.css"
import AOS from 'aos';
import "aos/dist/aos.css"

class TestTailwind extends Component {


    componentDidMount() {
        AOS.init({
            duration: 1200,
        })
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: "#101522"
                }}
            >
                {/*            <div class="md:container md:mx-auto bg-green-600 rounded shadow border p-8 m-10 hover:bg-red-600 ..."
                        data-aos="fade-left"
                        style={{
                            borderRadius: '25px'
                            ,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                    <p style={{ color: 'orange', fontWeight:'bold' }}>Window size: {this.state.width} x {this.state.height} </p>
                    
                    </div> */}

                <div class="md:container md:mx-auto bg-[#101529] rounded shadow border p-8 m-10 hover:bg-blue-400 ..."
                    data-aos="fade-right"
                    style={{
                        borderRadius: '5px'
                        ,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <p style={{
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "150%"
                    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare arcu non hendrerit pulvinar. Fusce tincidunt diam sed est pulvinar suscipit. Aliquam nulla odio, maximus a tempor eget, dapibus cursus tellus. Donec dignissim dolor varius hendrerit tempor. Ut orci leo, sagittis vitae aliquet at, sodales eget orci. Nulla venenatis vulputate dolor quis sodales. Maecenas ultrices ipsum et nulla tempor, ac malesuada nunc feugiat.</p>
                </div>
                <div class="md:container md:mx-auto bg-[#101529] rounded shadow border p-8 m-10 hover:bg-blue-900 ..."
                    data-aos="fade-right"
                    style={{
                        borderRadius: '5px'
                        ,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <p style={{
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "150%"
                    }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare arcu non hendrerit pulvinar. Fusce tincidunt diam sed est pulvinar suscipit. Aliquam nulla odio, maximus a tempor eget, dapibus cursus tellus. Donec dignissim dolor varius hendrerit tempor. Ut orci leo, sagittis vitae aliquet at, sodales eget orci. Nulla venenatis vulputate dolor quis sodales. Maecenas ultrices ipsum et nulla tempor, ac malesuada nunc feugiat.</p>
                </div>
            </div>
        );
    }
}

export default TestTailwind;