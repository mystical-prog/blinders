import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

class PreviousMatchContainer extends React.Component {

    render() {
    return (
        <div className="flex justify-between items-center w-80 bg-white p-5 rounded-lg">
            <Link to={`/dashboard/view/${this.props.addr}`}>
            <div>
            <div className="">
                <div className="rounded-full w-20 h-20 mb-1 bg-gray-600">
                    
                </div>

                <div className="text-center">
                    <span>{this.props.sideA}</span>
                </div>
            </div>
            <div className='flex justify-evenly items-center text-3xl'>
                <div> 
                    <p className='text-center my-2'>VS</p>
                </div>
            </div>
            <div className='flex flex-col justify-end gap-3 items-center text-3xl h-full'>
                <div> 
                    <p className='text-lg mr-2 mb-1 text-center text-red-500'></p>
                    <p className='text-xs text-center text-black'>{dayjs.unix(this.props.date).format('DD/MM/YYYY')}</p>
                </div>
            </div>
            <div className="">
                <div className="rounded-full w-20 h-20 mb-1 bg-gray-600">
                    
                </div>
    
                <div className="text-center">
                    <span>{this.props.sideB}</span>
                </div>
            </div>
            </div>
            </Link>
        </div>
        )
    }
}

export default PreviousMatchContainer;