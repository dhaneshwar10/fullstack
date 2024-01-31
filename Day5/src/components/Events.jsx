import Card1 from "../components/Card1";
function Events(){
    return(

        <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <div style={{ flexDirection: 'row', display: 'flex', marginLeft: 100, marginRight: 100 }}>
    <div style={{ marginLeft: 150 }}>
      <Card1 name='SK Birthday events' content='Place: Gandhipuram' />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
  <button style={{ padding: '10px 20px', fontSize: 16, backgroundColor: '#4CAF50', color: 'white', borderRadius: 5, cursor: 'pointer' }}>
    Give Order
  </button>
</div>

    <div style={{ marginLeft: 150 }}>
      <Card1 name='SK Birthday events' content='Place: Gandhipuram' />
    </div>
    <div style={{ marginLeft: 150 }}>
      <Card1 name='SK Birthday events' content='Place: Gandhipuram' />
    </div>
  </div>
  <br></br>
  <br></br>
  <br></br>
  <div style={{ flexDirection: 'row', display: 'flex', marginLeft: 100, marginRight: 100 }}>
    <div style={{ marginLeft: 150 }}>
      <Card1 name='SK Birthday events' content='Place: Gandhipuram' />
    </div>
    <div style={{ marginLeft: 150 }}>
      <Card1 name='SK Birthday events' content='Place: Gandhipuram' />
    </div>
    <div style={{ marginLeft: 150 }}>
      <Card1 name='SK Birthday events' content='Place: Gandhipuram' />
    </div>
    <br></br>
    <br></br>
  </div>
  </div>

    );
}
export default Events;
