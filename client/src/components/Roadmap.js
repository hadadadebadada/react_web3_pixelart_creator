import React, { Component } from 'react';
import "../tailwind.css"
import AOS from 'aos';
import "aos/dist/aos.css"
import Home from './Home';
class TestTailwind extends Component {

    constructor(props) {
        super(props);
        this.scrollToRoadmap = React.createRef();
      }

    componentDidMount() {
        AOS.init({
            duration: 2500,
        })
    }

    render() {

        return (
            <div
                style={{
                    backgroundColor: "#101522"
                }}
            >

<Home></Home>
                {/*            <div class="md:container md:mx-auto bg-green-600 rounded shadow border p-8 m-10 hover:bg-red-600 ..."
                        data-aos="flip-left"
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
                    <h1 style={{    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    textAlign: "center"
}} 
  
  class="font-medium leading-tight text-4xl mt-0 mb-2 text-white">Our Roadmap</h1>
                <div ref={this.scrollToRoadmap} class="md:container md:mx-auto bg-[#101529] rounded shadow border p-8 m-10 hover:bg-blue-400 ..."
                    data-aos="flip-right"
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
                    data-aos="flip-left"
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
                <div class="md:container md:mx-auto bg-[#101529] rounded shadow border p-8 m-10 hover:bg-blue-400 ..."
                    data-aos="flip-right"
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
                    data-aos="flip-right"
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
                   <div class="md:container md:mx-auto bg-[#101529] rounded shadow border p-8 m-10 hover:bg-blue-400 ..."
                    data-aos="flip-right"
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
                    data-aos="flip-right"
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