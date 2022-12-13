import { useEffect, useState } from "react";
import Orders from "./Orders";
import "./recentOrder.css";
import BillService from "../../services/bill.service";
import AuthService from "../../services/auth.service";

const RecentOrder = () => {
  const [content, setContent] = useState("");

  useEffect(() =>{
      BillService.getRecentBills(AuthService.getCurrentUser().username).then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content = 
          (error.response && error.response.data) ||
            error.message ||
            error.toString();
          setContent(_content)
      }
    );
  });

  function renderRecentBills(){
    let ret = [];
    
    for(let i=0; i<content.length; i++){
      
      ret.push(
        <Orders
          name={content[i].company.name}
          protocol={content[i].dueDate}
          value={content[i].documentValue}
          status={content[i].status.toString()}
          img={content[i].company.imgLogo}
        />
      )
    }

    return ret;
  }
  
  return (
    <div className="recent-orders">
      <h2>Suas Contas Recentes</h2>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Vencimento</th>
            <th>Valor R$</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        {renderRecentBills()}
      </table>
    </div>
  );
};

export default RecentOrder;
