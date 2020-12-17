import React from "react";

export default function AboutMe(props: any) {
    return <div>
        <div className="container">
            <div className="row d-flex flex-column flex-sm-row-reverse align-items-center">
                <div className="col-12 col-sm-6 mb-3 my-sm-0">
                    <img
                        src="/static/images/avatar.jpg"
                        className="avatar-image"
                        alt="Avatar"
                    />
                </div>
                <div className="col-12 col-sm-6 d-flex flex-column">
                    <div className="mr-sm-2">
                        <h1 className="main-title">Hi, I'm Colin.</h1>
                        <p className="my-4">
                            Co-founder & CEO @ <a href="https://layerci.com">LayerCI</a>.
                            We're building infrastructure for the future of software development.
                            Prior to co-founding Layer, I was CTO @ <a href="https://parsehub.com">ParseHub</a>, a
                            no-code web scraper.
                        </p>
                        <a href="mailto:colin@layerci.com"
                           className="btn btn-sm btn-outline-primary"><i
                            className="feather icon-mail"/> colin@layerci.com</a>
                    </div>
                </div>
            </div>
        </div>
	
	<div className="jumbotron">
		<div className="container">
			<div className="row d-flex flex-row align-items-center">
				<a href="https://www.forbes.com/profile/layerci" className="col mx-md-2">
					<img src="/static/images/forbes.png" className="showcase-logo" />
				</a>
				<a href="https://www.ycombinator.com/companies/21906" className="col mx-md-2">
					<img src="/static/images/yc.png" className="showcase-logo" />
				</a>
				<a href="https://betakit.com/11-canadian-startups-at-y-combinators-summer-2020-demo-day" className="col mx-md-2">
					<img src="/static/images/betakit.png" className="showcase-logo" />
				</a>
			</div>
		</div>
	</div>

        <div className="container">
            <div className="row d-flex flex-row align-items-center">
                <div className="col-12 col-sm-6">
                    <h2>LayerCI</h2>
                    <p>Idea: Combine the power of hosted staging servers, with the convenience of per-commit CI
                        pipelines.</p>
                    <h5>To use it</h5>
                    <ol>
                        <li><a href="https://layerci/login">Install Layer onto your repository</a></li>
                        <li><a href="https://layerci.com/layerfile-ide#editor">Create a Layerfile to describe your
                            staging VM</a></li>
                        <li>Every time you push code, we'll annotate GitHub with a link to a new staging environment
                        </li>
                    </ol>
                    <h5>Benefits</h5>
                    <ul>
                        <li><b><i className="feather icon-fast-forward"/> Review changes faster</b>with with a
                            full-stack
                            staging environment for every commit.
                        </li>
                        <li><b><i className="feather icon-dollar-sign"/> Reduce waste</b> - we hibernate your
                            environments seamlessly when you aren't using them.
                        </li>
                        <li><b><i className="feather icon-check"/> DRY</b> - instead of having a CI configuration and a
                            staging configuration, merge them.
                        </li>
                    </ul>
                    <p>
                        We'll reuse memory snapshots to reduce the time it takes to build an environment by 95%.
                    </p>
                </div>
                <div className="col-12 col-sm-6">
                    <img src="/static/images/dash.svg" alt="LayerCI dashboard" style={{width: "100%", height: "auto"}}/>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row d-flex flex-col flex-sm-row-reverse align-items-center">
                <div className="col-12 col-sm-6">
                    <h2>Sanic (OSS)</h2>
                    <p>Idea: Wrap all of the common docker/kubernetes functionality that you'd otherwise have to make from scratch.</p>
                    <h5>To use it</h5>
                    <ol>
                        <li><a href="https://sanic.io/download">Install Sanic</a></li>
                        <li>Create a sanic.yaml to configure your environments.</li>
                        <li>Build everything with "sanic build"</li>
                        <li>Deploy with "sanic deploy"</li>
                    </ol>
                </div>
                <div className="col-12 col-sm-6">
                    <img src="/static/images/sanic-build.gif" alt="Sanic build" style={{width: "100%", height: "auto"}}/>
                </div>
            </div>
        </div>
    </div>
}
