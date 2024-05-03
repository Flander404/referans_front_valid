import out_logo from "./../../../assets/images/output.png";
import in_logo from "./../../../assets/images/input.png";
import "./status.css";
import UniversalTable from "../../UI/table";

const balance = "28,778 USDT";

const output_but = "Вывести";
const input_but = "Пополнить";

//рендеринг странички "состояние счета"
function PartnerStatus() {
  //лого + ссылки + бегущая строка
  const headers = ["ID", "Name", "Email", "Status"];
  const data = [
    {
      ID: 1,
      Name: { line1: "John", line2: "Doe" },
      Email: "john@example.com",
      Status: { status: "active" },
    },
    {
      ID: 2,
      Name: { line1: "Jane", line2: "Doe" },
      Email: "jane@example.com",
      Status: { status: "inactive" },
    },
    // Добавьте больше данных по мере необходимости
  ];
  const columnTypes = ["default", "twoLines", "default", "status"];

  return (
    <div className="container container_status">
      <div class="title">
        {" "}
        <span>Состояние счета</span>
      </div>
      <div class="main_con">
        <div class="main_con_partn">
          <div class="card">
            <div class="title_card">Сумма всех счетов</div>

            <div class="balance_card">{balance}</div>

            <div class="description_card">
              Дата последнего пополнения: 19.02.2024
            </div>

            <div class="button_block">
              <div class="output_button">
                <img src={out_logo} alt="text" />
                {output_but}
              </div>
              <div class="input_button">
                <img src={in_logo} alt="text" />
                {input_but}
              </div>
            </div>
          </div>

          <div class="card">
            <div class="title_card">Заработано, % с вложений</div>

            <div class="balance_card">2,114 USDT</div>

            <div class="description_card">
              Ваш бонус – 10%. Как повысить уровень?
            </div>

            <div class="button_block">
              <div class="output_button">
                <img src={out_logo} alt="text" />
                {output_but}
              </div>
            </div>
          </div>

          <div class="card">
            <div class="title_card">Бонусы с реферальной программы</div>

            <div class="balance_card">1,723 USDT</div>

            <div class="description_card">
              Ваш бонус – 10%. Как повысить уровень?
            </div>

            <div class="button_block">
              <div class="output_button">
                <img src={out_logo} alt="text" />
                {output_but}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="title_balance">Стейкинг</div>

      <UniversalTable data={data} headers={headers} columnTypes={columnTypes} />
    </div>
  );
}
export default PartnerStatus;
