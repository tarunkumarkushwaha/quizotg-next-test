import React from 'react'
import Image from "next/image";
import Timer from './Timer';
// import { Logger } from '@nestjs/common';

const SingleQuestion = () => {




    // audios 
    let trueSound = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_b8c9103636.mp3?filename=correct-83487.mp3";
    let falseSound = "https://cdn.pixabay.com/download/audio/2021/08/04/audio_c6ccf3232f.mp3?filename=negative_beeps-6008.mp3";
    let timeover = "https://cdn.pixabay.com/download/audio/2022/03/10/audio_ad24b5e301.mp3?filename=bell-ringing-43862.mp3"

    // mock questions for testing

    let questions = [
        {
            question: "1. eval(5+2)",
            option1: "calculate by your self, i can't do it",
            option2: "52",
            option3: "7",
            option4: "error",
            correctresponse: "questions[0].option3",
            time: 2
        }
    ]

    console.log(questions)
    // Logger.log('info')

    return (

        <>
            <div id="quespage" className="flex-row">
                <div className="flex-row justify-center">

                    {/* <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/next.svg"
                        width={180}
                        height={37}
                        priority class="logo"
                        alt="javascript tester" /> */}
                </div>
                <Timer />
                <h3 id="question">{questions[0].question}</h3>
                <div id="option1">{questions[0].option1}</div>
                <div id="option2">{questions[0].option2}</div>
                <div id="option3">{questions[0].option3}</div>
                <div id="option4">{questions[0].option4}</div>
                <div className="flex-row justify-center">
                    <button type="button" id="btnsubmit">Final Submit</button>
                    <button type="button" id="whos_next">Next</button>
                </div>
            </div>
        </>
    )
}

export default SingleQuestion