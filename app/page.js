const monitorUrl = 'https://primal-space-monitor.vercel.app/';
const cliUrl = 'https://github.com/mahithpaulin/primal-space-cli';
const monitorRepoUrl = 'https://github.com/mahithpaulin/primal-space-monitor';

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="#top"><span className="mark" />PRIMAL<span>SPACE</span></a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#install">Install</a>
          <a className="nav-button" href={monitorUrl}>Open monitor <Arrow /></a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="eyebrow"><span className="pulse" />PRIVATE DEVICE COMPUTE</div>
        <h1>Your devices.<br /><em>Working together.</em></h1>
        <p className="hero-copy">PrimalSpace turns the devices you already own into a coordinated, observable compute network. Start with one phone. Grow from there.</p>
        <div className="hero-actions">
          <a className="button primary" href="#install">Get PrimalSpace <Arrow /></a>
          <a className="button secondary" href={monitorUrl}>View live monitor <Arrow /></a>
        </div>
        <div className="hero-orbit" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core"><span /></div><div className="node node-a" /><div className="node node-b" /><div className="node node-c" /></div>
      </section>

      <section id="how" className="section shell">
        <div className="section-label">01 / THE NETWORK</div>
        <div className="section-heading"><h2>One control plane.<br /><span>Every device visible.</span></h2><p>Connect Android devices through the PrimalSpace CLI, watch their health in real time, and send safe workloads wherever capacity is available.</p></div>
        <div className="feature-grid">
          <article><div className="feature-number">01</div><h3>Connect</h3><p>Register a device in seconds. Heartbeats keep its status, resources, and worker state current.</p></article>
          <article><div className="feature-number">02</div><h3>Coordinate</h3><p>Queue deterministic benchmarks or restricted Python functions from one public monitor.</p></article>
          <article><div className="feature-number">03</div><h3>Observe</h3><p>See CPU, memory, battery, network, task results, and captured output from every worker.</p></article>
        </div>
      </section>

      <section id="install" className="install-section">
        <div className="shell install-layout">
          <div><div className="section-label">02 / GET STARTED</div><h2>Built for the<br /><em>command line.</em></h2><p>PrimalSpace currently ships as a Python CLI for Termux. Install it on an Android device, connect it to your monitor, and opt into compute when you are ready.</p><a className="button primary" href={cliUrl}>Download CLI from GitHub <Arrow /></a></div>
          <div className="terminal"><div className="terminal-bar"><span /><span /><span /><label>primalspace / install</label></div><pre><code><i>$</i> git clone {cliUrl.replace('https://github.com/', 'github.com/')}<br /><i>$</i> cd primal-space-cli<br /><i>$</i> pip install -e .<br /><i>$</i> primal init --server {monitorUrl.replace('https://', '')}<br /><i>$</i> primal connect<br /><br /><b>● connected</b>  Realme Narzo 50A<br /><small>heartbeat active · compute enabled</small></code></pre></div>
        </div>
      </section>

      <section className="status-section shell"><div className="status-card"><div><div className="section-label">LIVE SYSTEM</div><h2>See the network<br />as it runs.</h2></div><div className="status-right"><div className="live-line"><span className="live-dot" />Production monitor online</div><p>Open the dashboard to view connected devices, queue work, and inspect results.</p><a href={monitorUrl}>Open Primal Monitor <Arrow /></a></div></div></section>

      <footer className="footer shell"><a className="wordmark" href="#top"><span className="mark" />PRIMAL<span>SPACE</span></a><div><a href={cliUrl}>CLI</a><a href={monitorRepoUrl}>Monitor source</a><a href={monitorUrl}>Dashboard</a></div><small>Private compute, made visible.</small></footer>
    </main>
  );
}
