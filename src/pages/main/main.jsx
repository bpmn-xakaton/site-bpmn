import s from "./main.module.css"
import vector_circle from "../../../public/assets/vectors/vector.png"
import person from "../../../public/assets/vectors/person.png"

export function Main() {
    return (
        <>
            <div className={s.wrapper_v1}>
                <div className={s.wrapper_bottom}>
                    <img className={s.vector} src={vector_circle}></img>

                </div>

                <div className={s.wrapper_v2}>
                    <img className={s.person} src={person}></img>
                </div>

            </div>

            <div>

            </div>

        </>
    )
}