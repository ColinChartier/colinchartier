export default function Home() {
  return (
    <div className="pt-4 md:pt-16 lg:pt-32">
      <div className="container mx-auto px-4 py-4 md:py-8 lg:py-16">
        <div className="flex flex-col sm:flex-row-reverse items-center">
          <div className="w-full sm:w-1/2 mb-3 sm:mb-0">
            <img
              src="/static/images/avatar.jpg"
              className="w-full max-w-sm h-auto rounded-lg mx-auto"
              alt="Avatar"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <div className="sm:mr-2">
              <h1 className="text-4xl font-bold font-[family-name:var(--font-leckerli-one)]">Hi, I'm Colin.</h1>
              <p className="my-4">
                Co-founder & CEO @ <a href="https://webapp.io" className="text-blue-600 hover:underline">webapp.io</a>.
                We're building infrastructure for the future of full-stack web development.
                Prior to co-founding webapp.io, I was CTO @ <a href="https://parsehub.com" className="text-blue-600 hover:underline">ParseHub</a>, a
                no-code web scraper.
              </p>
              <a 
                href="mailto:colin@webapp.io"
                className="inline-flex items-center px-3 py-2 border border-blue-600 text-sm font-medium rounded text-blue-600 hover:bg-blue-50"
              >
                📧 colin@webapp.io
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-8 my-8 md:my-16 lg:my-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center justify-center space-x-4 md:space-x-8">
            <a href="https://www.forbes.com/profile/layerci" className="flex-1 text-center">
              <img src="/static/images/forbes.png" className="h-12 mx-auto" alt="Forbes" />
            </a>
            <a href="https://www.ycombinator.com/companies/21906" className="flex-1 text-center">
              <img src="/static/images/yc.png" className="h-12 mx-auto" alt="Y Combinator" />
            </a>
            <a href="https://betakit.com/11-canadian-startups-at-y-combinators-summer-2020-demo-day" className="flex-1 text-center">
              <img src="/static/images/betakit.png" className="h-12 mx-auto" alt="BetaKit" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="flex flex-row items-center">
          <div className="w-full sm:w-1/2">
            <img 
              src="/webapp.svg" 
              alt="webapp.io" 
              className="mb-4 h-8 w-auto" 
            />
            <p>Idea: Use memory snapshots to make full-stack web development faster than ever before.</p>
            <h5 className="text-lg font-semibold mt-4">To use it</h5>
            <ol className="list-decimal list-inside">
              <li><a href="https://webapp.io" className="text-blue-600 hover:underline">Install webapp.io onto your repository</a></li>
              <li><a href="https://webapp.io/docs/layerfile-reference" className="text-blue-600 hover:underline">Create a Layerfile to describe your staging VM</a></li>
              <li>Every time you push code, we'll annotate GitHub with a link to a new staging environment</li>
            </ol>
            <h5 className="text-lg font-semibold mt-4">Benefits</h5>
            <ul className="list-disc list-inside">
              <li><b>⏩ Review changes faster</b> with a full-stack review environment for every commit.</li>
              <li><b>💲 Reduce waste</b> - we hibernate your environments seamlessly when you aren't using them.</li>
              <li><b>✅ DRY</b> - instead of having a CI configuration and a staging configuration, merge them.</li>
            </ul>
            <p className="mt-4">
              We'll reuse memory snapshots to reduce the time it takes to build an environment by 95%.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <img src="/static/images/dash.svg" alt="LayerCI dashboard" className="w-full h-auto"/>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col sm:flex-row-reverse items-center gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl font-bold">Sanic (OSS)</h2>
            <p>Idea: Wrap all of the common docker/kubernetes functionality that you'd otherwise have to make from scratch.</p>
            <h5 className="text-lg font-semibold mt-4">To use it</h5>
            <ol className="list-decimal list-inside">
              <li><a href="https://github.com/webappio/sanic" className="text-blue-600 hover:underline">Install Sanic</a></li>
              <li>Create a sanic.yaml to configure your environments.</li>
              <li>Build everything with "sanic build"</li>
              <li>Deploy with "sanic deploy"</li>
            </ol>
          </div>
          <div className="w-full sm:w-1/2">
            <img src="/static/images/sanic-build.gif" alt="Sanic build" className="w-full h-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
}
