import { useEffect, useState } from "react";
import "./Pomodoro.css";
import arrow from "../../assets/arrow.svg";
import close from "../../assets/close.svg";

export default function Pomodoro() {
  const [currentTime, setCurrentTime] = useState(function () {
    return new Date("Sep 3, 2023, 00:25:00");
  });
  const [timerHasStarted, setTimerHasStarted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(
    function () {
      if (timerHasStarted) {
        let intervalId = setInterval(function () {
          const endTime = new Date("Sep 3, 2023, 00:00:00");

          if (currentTime.getTime() === endTime.getTime()) {
            setTimerHasStarted((prevValue) => !prevValue);
            console.log("ran");
          } else {
            setCurrentTime((prevValue) => {
              let tempValue = new Date();
              tempValue.setTime(prevValue.getTime());
              tempValue.setTime(tempValue.getTime() - 1000);
              return tempValue;
            });
          }
        }, 1000);

        return () => clearInterval(intervalId);
      }
    },
    [timerHasStarted, currentTime]
  );

  return (
    <div className="pomodoro">
      <div className="pomodoro-container">
        <div className="timer-wrapper">
          <button
            className="tips"
            onClick={() => setShowPopUp((prevValue) => !prevValue)}
          >
            Tips to boost productivity{" "}
            <img className="arrow" src={arrow} alt="arrow" />
          </button>
          <div className="timer">
            {currentTime.getMinutes()}:
            {currentTime.getSeconds() > 9
              ? currentTime.getSeconds()
              : `0${currentTime.getSeconds()}`}
          </div>
          <div className="cta-container">
            <button
              className="cta"
              onClick={() => setTimerHasStarted((prevValue) => !prevValue)}
            >
              {timerHasStarted
                ? "Pause"
                : currentTime.getTime() !==
                  new Date("Sep 3, 2023, 00:25:00").getTime()
                ? "Resume"
                : "Start"}
            </button>
            {timerHasStarted ||
            currentTime.getTime() !==
              new Date("Sep 3, 2023, 00:25:00").getTime() ? (
              <button
                className="cta"
                onClick={() => {
                  setCurrentTime(new Date("Sep 3, 2023, 00:25:00"));
                  setTimerHasStarted(false);
                }}
              >
                Reset
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {showPopUp ? (
        <div className="pop-up">
          <div
            className="close"
            onClick={() => setShowPopUp((prevValue) => !prevValue)}
          >
            <img src={close} alt="" />
          </div>
          <p className="first">
            How to learn anything faster ? Use <span>FASTER</span> method
          </p>
          <p>
            <span>F is for Forget</span> Begin with an open mind, like a child.
            Put aside preconceived notions and approach the topic as if you know
            nothing about it.
          </p>
          <p>
            <span>A is for Act</span> Make learning an active process. Take
            notes, highlight key points, and engage with the material. Avoid
            over-highlighting; instead, interact thoughtfully.
          </p>
          <p>
            <span>S is for State of Mind</span> Cultivate excitement and
            enthusiasm for learning. Adjust your posture to match an energetic
            state, and focus on the benefits of acquiring new knowledge.
          </p>
          <p>
            <span>T is for Teach</span> Learn with the intention of teaching
            someone else. This encourages deeper understanding and mastery of
            the subject. Invite others to learn with you for discussions and
            idea sharing.
          </p>
          <p>
            <span>E is for Enter</span> Use your calendar to schedule dedicated
            time for learning. Creating a structured plan increases your chances
            of completing your learning goals.
          </p>
          <p>
            <span>R is for Review</span> Enhance retention through active recall
            and spaced repetition. Before revising material, challenge yourself
            to recall what you remember about the topic
          </p>
          <div className="music">
            <p>
              <span>Did you know?</span> <br />Baroque music creates an
              atmosphere of focus that leads students into deep concentration in
              the alpha brain wava state.
            </p>
            <div>
              {" "}
              <iframe
                width="260"
                height="146"
                src="https://www.youtube.com/embed/CuU9q2VKOyc?si=XqF9xgGqRQVtNH6L"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
