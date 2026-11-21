const cliUrl = 'https://github.com/mahithpaulin/primal-space-cli';
const androidRepoUrl = 'https://github.com/mahithpaulin/primalspace-android';
const apkUrl = 'https://github.com/mahithpaulin/primalspace-android/releases/latest/download/primalspace.apk';

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
          <a className="nav-button" href={apkUrl}>Get the app <Arrow /></a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="eyebrow"><span className="pulse" />PRIVATE DEVICE COMPUTE</div>
        <h1>Your devices.<br /><em>Working together.</em></h1>
        <p className="hero-copy">PrimalSpace turns the devices you already own into a coordinated, observable compute network. Start with one phone. Grow from there.</p>
        <div className="hero-actions">
          <a className="button primary" href={apkUrl}>Download Android app <Arrow /></a>
          <a className="button secondary" href="#how">How it works <Arrow /></a>
        </div>
        <div className="hero-orbit" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core"><span /></div><div className="node node-a" /><div className="node node-b" /><div className="node node-c" /></div>
      </section>

      <section id="how" className="section shell">
        <div className="section-label">01 / THE NETWORK</div>
        <div className="section-heading"><h2>One control plane.<br /><span>Every device visible.</span></h2><p>Install the app on an Android device, tap connect, and your device joins a private compute network. Opt into contributing only when you choose.</p></div>
        <div className="feature-grid">
          <article><div className="feature-number">01</div><h3>Connect</h3><p>One tap registers your device. There are no keys to copy and no configuration to manage.</p></article>
          <article><div className="feature-number">02</div><h3>Opt in</h3><p>Compute is off by default. Enable it when you are comfortable, and disable it whenever you like.</p></article>
          <article><div className="feature-number">03</div><h3>Contribute</h3><p>Your device accepts safe, short workloads in the background while it is plugged in and available.</p></article>
        </div>
      </section>

      <section id="install" className="install-section">
        <div className="shell install-layout">
          <div><div className="section-label">02 / GET STARTED</div><h2>One app.<br /><em>Two taps.</em></h2><p>PrimalSpace for Android is a small native app. Connect your device, then decide whether it should contribute. Nothing else to configure.</p><div className="install-actions"><a className="button primary" href={apkUrl}>Download Android APK <Arrow /></a><a className="button install-secondary" href={androidRepoUrl}>View app source <Arrow /></a></div></div>
          <div className="terminal"><div className="terminal-bar"><span /><span /><span /><label>primalspace / android</label></div><pre><code><b>1.</b> Install PrimalSpace<br /><b>2.</b> Tap <i>Connect to PrimalSpace</i><br /><b>3.</b> Tap <i>Enable compute</i> when ready<br /><br /><small>● connected</small>  Realme Narzo 50A<br /><small>foreground worker running</small></code></pre></div>
        </div>
      </section>

      <section className="status-section shell"><div className="status-card"><div><div className="section-label">PRIVACY</div><h2>Yours to run.<br />Yours to stop.</h2></div><div className="status-right"><div className="live-line"><span className="live-dot" />Operator-controlled network</div><p>Work is dispatched by a private operator console. Your device stays offline from the network whenever compute opt-in is off.</p><a href={apkUrl}>Get the app <Arrow /></a></div></div></section>

      <footer className="footer shell"><a className="wordmark" href="#top"><span className="mark" />PRIMAL<span>SPACE</span></a><div><a href={apkUrl}>Android app</a><a href={cliUrl}>CLI</a><a href={androidRepoUrl}>App source</a></div><small>Private compute, made visible.</small></footer>
    </main>
  );
}
