import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Ivan from './IvanGrozny.jpg';
import NeZhdali from './NeZhdali.jpg';
import Message from './Message.jpg';
import Repin from './Repin.jpg';

const Main = () => {
  return (
    <>
      <h2>Сайт про жизнь и творчество живописца Ильи Ефимовича Репина</h2>
      <img className='pic3' src={Repin} alt='Repin'/>
    </>
    )
}

const Biography = () => {
  return (
  <div>
    <h2>Илья́ Ефи́мович Ре́пин - биография</h2>
    <hr/>
    <p>Илья́ Ефи́мович Ре́пин (24 июля (5 августа) 1844, Чугуев, Российская империя — 29 сентября 1930, Куоккала, Финляндия) — русский живописец, педагог, профессор, действительный член Императорской Академии художеств.
    Уже с самого начала своего творческого пути, с 1870-х годов, Репин стал одной из ключевых фигур русского реализма. Художнику удалось решить задачу отражения в живописном произведении всего разнообразия окружающей жизни. В своём творчестве он сумел охватить все стороны современности, затронуть темы, волнующие общественность, живо реагировал на злобу дня. Репинскому художественному языку была свойственна пластичность, он воспринимал различные стилистические направления от испанских и голландских художников XVII века до Александра Иванова и современных французских импрессионистов.
    Расцвет творчества Репина пришёлся на 1880-е годы. Он создаёт галерею портретов современников, работает как исторический художник и мастер бытовых сцен. В области исторической живописи его привлекала возможность раскрыть эмоциональную выразительность предложенной ситуации. Стихией художника была современность, и, даже создавая картины на темы легендарного прошлого, он оставался мастером животрепещущего настоящего, сокращая дистанцию между зрителем и героями своих произведений. По мнению искусствоведа В. В. Стасова, творчество Репина — «энциклопедия пореформенной России». Последние 30 лет жизни Репин провёл в своём имении Пенаты в Куоккале, в окрестностях Санкт-Петербурга. Из них 13 лет в вынужденной эмиграции, после передачи этой территории Финляндии. Он продолжал работать, хотя уже не так интенсивно, как прежде. В последние годы он обратился к библейским сюжетам. В Куоккале Репин написал мемуары, ряд его очерков вошёл в книгу воспоминаний «Далёкое близкое».
    Как педагог воспитал целую плеяду прославленных художников: Б. М. Кустодиев, И. Э. Грабарь, И. С. Куликов, Ф. А. Малявин, А. П. Остроумова-Лебедева, Н. И. Фешин, В. А. Серов.</p>
  </div>
  )
}
const MostPopularPicture = () => {
  return (
    <>
      <h2>Самая популярная картина</h2>
      <hr/>
      <h2>«Иван Грозный и сын его Иван 16 ноября 1581 года»</h2>
      <img className='pic1' src={Ivan} alt='Ivan'></img>
    </>
  )
}

const CollectionPicture = () => {
  return (
  <>
    <h2>Коллекция произведений</h2>
    <hr/>
    <div className='wrapper'>
      <div>
        <img className='pic2' src={Ivan} alt='Ivan'></img>
        <h3>Иван Грозный и сын его Иван 16 ноября 1581 года</h3>
      </div>
      <div>
        <img className='pic2' src={NeZhdali} alt='NeZhdali'></img>
        <h3>Не ждали</h3>
      </div>
      <div>
        <img className='pic2' src={Message} alt='Message'></img>
        <h3>Запорожцы пишут письмо турецкому султану</h3>
      </div>
    </div>
  </>
  )
}

const NotFound = () => {
  return <h2>Not found</h2>
}

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link style={{textDecoration:'none',color:'white'}} to='/'>Главная</Link>
              </li>
              <li>
                <Link style={{textDecoration:'none',color:'white'}} to='/Biography'>Биография</Link>
              </li>
              <li>
                <Link style={{textDecoration:'none',color:'white'}} to='/MostPopularPicture'>Самая популярная картина</Link>
              </li>
              <li>
                <Link style={{textDecoration:'none',color:'white'}} to='/CollectionPicture'>Собрание картин</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/MostPopularPicture' element={<MostPopularPicture/>}/>
          <Route exact path='/CollectionPicture' element={<CollectionPicture/>}/>
          <Route exact path='/Biography' element={<Biography/>}/>
          <Route element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
