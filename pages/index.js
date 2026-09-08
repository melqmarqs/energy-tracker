function Home() {
  function getTime() {
    const startDate = new Date("2026-08-15").getTime();
    const now = new Date().getTime();
    const diff = now - startDate;

    let daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

    return daysDiff;
  }

  return <h1>Em construção há {getTime()} dias</h1>;
}

export default Home;
