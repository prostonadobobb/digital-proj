import './Tasks.scss';

export const Tasks = () => {
  return (
    <section className="tasks">
        <div className="tasks__title">
          Основні задачі
        </div>
        <div className="tasks__container">
          <div className="tasks__task tasks__task--one">
            <p className="tasks__task--text">Створення комфортних умов та підвищення якості обслуговування клієнтів</p>
          </div>
          <div className="tasks__task tasks__task--two">
            <p className="tasks__task--text">Постійно вдосконалювати якість послуг шляхом навчання персоналу, закупівлі нового обладнання та посиленої реклами на ринку</p>
          </div>
        </div>
    </section>
  );
};