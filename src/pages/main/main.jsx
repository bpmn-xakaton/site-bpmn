import s from "./main.module.css"
import left_bg from "../../../public/assets/vectors/left-bg.png"
import logo from "../../../public/assets/vectors/logo.png"

export function Main() {
    return (
        <div className={s.container}>
            <div className={s.wrapper_v1}>
                    <img className={s.person} src={left_bg}></img>
            </div>

            <div className={s.wrapper_v2}>
                <div className="mb-14">
                    <img src={logo} className={logo}></img>
                    <div className="w-[500px] h-[1px] mt-5 absolute bg-gray-200"></div>
                </div>

                <div>

                    <div className="text-[60px] leading-[1.1] mb-7 text-gray-800">Создавай диаграммы BPMN с помощью ИИ</div>
                    <div className="text-[20px] text-gray-600 mb-4">Процесс начинается с заявки, потом проверка данных, если
                        всё верно –
                        согласование, иначе – отказ."
                    </div>
                    <div className="text-[20px] text-gray-600">
                        Система рисует BPMN с стартовым событием, задачей "Проверка данных", шлюзом (развилка Да/Нет),
                        задачами "Согласование" и "Отказ".
                    </div>
                </div>

                <button className="btn mt-8 text-[18px]">Открыть чат</button>
            </div>

        </div>
    )
}