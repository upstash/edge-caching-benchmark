import './App.css';
import {useEffect, useState} from "react";
import {Chart} from "react-google-charts";


function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [usEast1Latency, setUsEast1Latency] = useState({edgee: "?", edged: "?"});
    const [usWest1Latency, setUsWest1Latency] = useState({edgee: "?", edged: "?"});
    const [usWest2Latency, setUsWest2Latency] = useState({edgee: "?", edged: "?"});
    const [afSouth1Latency, setAfSouth1Latency] = useState({edgee: "?", edged: "?"});
    const [apEast1Latency, setApEast1Latency] = useState({edgee: "?", edged: "?"});
    const [apNorthEast1Latency, setApNorthEast1Latency] = useState({edgee: "?", edged: "?"});
    const [euWest1Latency, setEuWest1Latency] = useState({edgee: "?", edged: "?"});
    const [euCentral1Latency, setEuCentral1Latency] = useState({edgee: "?", edged: "?"});
    const [meSouth1Latency, setMeSouth1Latency] = useState({edgee: "?", edged: "?"});
    const [saEast1Latency, setSaEast1Latency] = useState({edgee: "?", edged: "?"});
    const [latency50, setLatency50] = useState({edgee: "?", edged: "?"});
    const [latency99, setLatency99] = useState({edgee: "?", edged: "?"});
    const [latency999, setLatency999] = useState({edgee: "?", edged: "?"});
    const urlUsEast1 = "https://effbmlt2n4.execute-api.us-east-1.amazonaws.com/dev/run";
    const urlUsWest1 = "https://kg2nsnegmd.execute-api.us-west-1.amazonaws.com/dev/run";
    const urlUsWest2 = "https://xsdlzzdyji.execute-api.us-west-2.amazonaws.com/dev/run";
    const urlAfSouth1 = "https://up1j9vlh71.execute-api.af-south-1.amazonaws.com/dev/run";
    const urlApEast1 = "https://gu1zu8xx11.execute-api.ap-east-1.amazonaws.com/dev/run";
    const urlApNorthEast1 = "https://c3iqabumtd.execute-api.ap-northeast-1.amazonaws.com/dev/run";
    const urlEuWest1 = "https://fvj3rll99i.execute-api.eu-west-1.amazonaws.com/dev/run";
    const urlEuCentral1 = "https://bszkhcn2m7.execute-api.eu-central-1.amazonaws.com/dev/run";
    const urlMeSouth1 = "https://um7c15bqnl.execute-api.me-south-1.amazonaws.com/dev/run";
    const urlSaEast1 = "https://kuhry6kp4h.execute-api.sa-east-1.amazonaws.com/dev/run";

    const histogramUrl = "https://nlm8ixxhud.execute-api.us-west-1.amazonaws.com/dev/histogram";

    function refreshPage() {
        window.location.reload(true);
    }

    useEffect(() => {
        let temp = []
        const promises = []
        fetch(urlUsEast1).then(res => res.json())
            .then(
                (result) => {
                    setUsEast1Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(urlUsWest1).then(res => res.json())
            .then(
                (result) => {
                    setUsWest1Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(urlUsWest2).then(res => res.json())
            .then(
                (result) => {
                    setUsWest2Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(urlAfSouth1).then(res => res.json())
            .then(
                (result) => {
                    setAfSouth1Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(urlApEast1).then(res => res.json())
            .then(
                (result) => {
                    setApEast1Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(urlApNorthEast1).then(res => res.json())
            .then(
                (result) => {
                    setApNorthEast1Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(urlEuWest1).then(res => res.json())
            .then(
                (result) => {
                    setEuWest1Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(urlEuCentral1).then(res => res.json())
            .then(
                (result) => {
                    setEuCentral1Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(urlMeSouth1).then(res => res.json())
            .then(
                (result) => {
                    setMeSouth1Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(urlSaEast1).then(res => res.json())
            .then(
                (result) => {
                    setSaEast1Latency({
                        edgee: result.latencyEdgeEnabled,
                        edged: result.latencyEdgeDisabled
                    })
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch(histogramUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    setLatency50({
                        edgee: result.edgee_histogram.p50,
                        edged: result.edged_histogram.p50,
                    })
                    setLatency99({
                        edgee: result.edgee_histogram.p99,
                        edged: result.edged_histogram.p99,
                    })
                    setLatency999({
                        edgee: result.edgee_histogram.p99_9,
                        edged: result.edged_histogram.p99_9,
                    })
                }
            )
    }, [])

    let status;
    if (error) {
        status = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        status = <div>Loading...</div>;
    }

    let round = (x) => {
        return x === "?" ? "?" : Math.round(x);
    }

    return (
        <div className="intro">
            <h3>Global Latency Benchmark for Serverless Redis <br/> with Edge Caching vs without Edge Caching </h3>
            This single page application shows the latency improvement when Edge Caching is enabled for an
            <a href={"https://upstash.com"} target={"_blank"}> Upstash Redis database </a> where the Redis clients are globally distributed.
            <br/>
            <br/>
            We have implemented an AWS Lambda function which reads a value from an Upstash database using the REST API.
            We have deployed this function to 10 different regions all over the world.
            The database is at the US West (N. California) region.
            <br/>
            <br/>
            This page calls the 10 Lambda functions and each function makes two REST requests to the database. First
            request has Edge Caching enabled, the second one is without Edge Caching.
            Each function records the latencies of both requests.

            <br/>
            <br/>
            Here the latency of your request:
            <span onClick={refreshPage} className="reload">
                 ⟳
            </span>
            <br/>
            <br/>
            <b>
                Database Region: US West (N. California)
            </b>
            <br/>
            <table className={"latencyTable"}>
                <tr>
                    <th>Client Region</th>
                    <th>Latency - Edge Disabled</th>
                    <th>Latency - Edge Enabled</th>
                    <th>Performance Gain</th>
                </tr>
                <tr>
                    <td>US West (N. California)</td>
                    <td>{round(usWest1Latency.edged)} ms</td>
                    <td>{round(usWest1Latency.edgee)} ms</td>
                    <td className={usWest1Latency.edged >= usWest1Latency.edgee ? "gainTd" : "lossTd"}>
                        {usWest1Latency.edged >= usWest1Latency.edgee ? "▲ " : "▼ "}
                        {round((usWest1Latency.edged - usWest1Latency.edgee) * 100 / usWest1Latency.edged)}%
                    </td>
                </tr>
                <tr>
                    <td>US West (Oregon)</td>
                    <td>{round(usWest2Latency.edged)} ms</td>
                    <td>{round(usWest2Latency.edgee)} ms</td>
                    <td className={usWest2Latency.edged >= usWest2Latency.edgee ? "gainTd" : "lossTd"}>
                        {usWest2Latency.edged >= usWest2Latency.edgee ? "▲ " : "▼ "}
                        {round((usWest2Latency.edged - usWest2Latency.edgee) * 100 / usWest2Latency.edged)}%
                    </td>
                </tr>
                <tr>
                    <td>US East (N. Virginia)</td>
                    <td>{round(usEast1Latency.edged)} ms</td>
                    <td>{round(usEast1Latency.edgee)} ms</td>
                    <td className={usEast1Latency.edged >= usEast1Latency.edgee ? "gainTd" : "lossTd"}>
                        {usEast1Latency.edged >= usEast1Latency.edgee ? "▲ " : "▼ "}
                        {round((usEast1Latency.edged - usEast1Latency.edgee) * 100 / usEast1Latency.edged)}%
                    </td>
                </tr>
                <tr>
                    <td>South America (São Paulo)</td>
                    <td>{round(saEast1Latency.edged)} ms</td>
                    <td>{round(saEast1Latency.edgee)} ms</td>
                    <td className={saEast1Latency.edged >= saEast1Latency.edgee ? "gainTd" : "lossTd"}>
                        {saEast1Latency.edged >= saEast1Latency.edgee ? "▲ " : "▼ "}
                        {round((saEast1Latency.edged - saEast1Latency.edgee) * 100 / saEast1Latency.edged)}%
                    </td>
                </tr>
                <tr>
                    <td>Africa (Cape Town)</td>
                    <td>{round(afSouth1Latency.edged)} ms</td>
                    <td>{round(afSouth1Latency.edgee)} ms</td>
                    <td className={afSouth1Latency.edged >= afSouth1Latency.edgee ? "gainTd" : "lossTd"}>
                        {afSouth1Latency.edged >= afSouth1Latency.edgee ? "▲ " : "▼ "}
                        {round((afSouth1Latency.edged - afSouth1Latency.edgee) * 100 / afSouth1Latency.edged)}%
                    </td>
                </tr>
                <tr>
                    <td>Asia Pacific (Hong Kong)</td>
                    <td>{round(apEast1Latency.edged)} ms</td>
                    <td>{round(apEast1Latency.edgee)} ms</td>
                    <td className={apEast1Latency.edged >= apEast1Latency.edgee ? "gainTd" : "lossTd"}>
                        {apEast1Latency.edged >= apEast1Latency.edgee ? "▲ " : "▼ "}
                        {round((apEast1Latency.edged - apEast1Latency.edgee) * 100 / apEast1Latency.edged)}%
                    </td>
                </tr>
                <tr>
                    <td>Asia Pacific (Tokyo)</td>
                    <td>{round(apNorthEast1Latency.edged)} ms</td>
                    <td>{round(apNorthEast1Latency.edgee)} ms</td>
                    <td className={apNorthEast1Latency.edged >= apNorthEast1Latency.edgee ? "gainTd" : "lossTd"}>
                        {apNorthEast1Latency.edged >= apNorthEast1Latency.edgee ? "▲ " : "▼ "}
                        {round((apNorthEast1Latency.edged - apNorthEast1Latency.edgee) * 100 / apNorthEast1Latency.edged)}%
                    </td>
                </tr>
                <tr>
                    <td>Europe (Ireland)</td>
                    <td>{round(euWest1Latency.edged)} ms</td>
                    <td>{round(euWest1Latency.edgee)} ms</td>
                    <td className={euWest1Latency.edged >= euWest1Latency.edgee ? "gainTd" : "lossTd"}>
                        {euWest1Latency.edged >= euWest1Latency.edgee ? "▲ " : "▼ "}
                        {round((euWest1Latency.edged - euWest1Latency.edgee) * 100 / euWest1Latency.edged)}%
                    </td>
                </tr>
                <tr>
                    <td>Europe (Frankfurt)</td>
                    <td>{round(euCentral1Latency.edged)} ms</td>
                    <td>{round(euCentral1Latency.edgee)} ms</td>
                    <td className={euCentral1Latency.edged >= euCentral1Latency.edgee ? "gainTd" : "lossTd"}>
                        {euCentral1Latency.edged >= euCentral1Latency.edgee ? "▲ " : "▼ "}
                        {round((euCentral1Latency.edged - euCentral1Latency.edgee) * 100 / euCentral1Latency.edged)}%
                    </td>
                </tr>
                <tr>
                    <td>Middle East (Bahrain)</td>
                    <td>{round(meSouth1Latency.edged)} ms</td>
                    <td>{round(meSouth1Latency.edgee)} ms</td>
                    <td className={meSouth1Latency.edged >= meSouth1Latency.edgee ? "gainTd" : "lossTd"}>
                        {meSouth1Latency.edged >= meSouth1Latency.edgee ? "▲ " : "▼ "}
                        {round((meSouth1Latency.edged - meSouth1Latency.edgee) * 100 / meSouth1Latency.edged)}%
                    </td>
                </tr>
            </table>

            <br/>
            As the distance between the server and the client increases, the impact of edge caching increases. See <a href="https://blog.upstash.com/edge-caching-benchmark" rel="noreferrer" target="_blank">the blog post
        </a> for the details.
            <br/>
            <br/>
            <b>The latency numbers collected so far:</b>
            <br/>
            <br/>
            <div className="container-fluid">
                <div className="row chartRow">
                    <div className="col-11 chartDiv">
                        50th Percentile (latency in milliseconds):
                        <Chart
                            chartType="ColumnChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['API', 'p50 latency (ms)', {role: 'style'}, {role: 'annotation'}],
                                ['Edge Enabled', latency50.edgee, "#469454", latency50.edgee],
                                ['Edge Disabled', latency50.edged, "#D96C2D", latency50.edged],
                            ]}
                            options={{
                                title: '50 Percentile Latency in Milliseconds',
                                titlePosition: 'none',
                                chartArea: {left: 60, width: '40%'},
                                hAxis: {
                                    minValue: 0,
                                },
                                backgroundColor: '#FAFAFA',
                                legend: {position: 'none'},
                                vAxis: {
                                    title: 'milliseconds',
                                },
                            }}
                        />
                    </div>
                    <div className="col-11 chartDiv">
                        99th Percentile (latency in milliseconds):
                        <Chart
                            chartType="ColumnChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['API', 'p99 latency (ms)', {role: 'style'}, {role: 'annotation'}],
                                ['Edge Enabled', latency99.edgee, "#469454", latency99.edgee],
                                ['Edge Disabled', latency99.edged, "#D96C2D", latency99.edged],
                            ]}
                            options={{
                                title: '99 Percentile Latency in Milliseconds',
                                titlePosition: 'none',
                                chartArea: {left: 60, width: '40%'},
                                hAxis: {
                                    minValue: 0,
                                },
                                backgroundColor: '#FAFAFA',
                                legend: {position: 'none'},
                                vAxis: {
                                    title: 'milliseconds',
                                },
                            }}
                        />
                    </div>
                    <div className="col-11 chartDiv">
                        99.9th Percentile (latency in milliseconds):
                        <Chart
                            chartType="ColumnChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['API', 'p99.9 latency (ms)', {role: 'style'}, {role: 'annotation'}],
                                ['Edge Enabled', latency999.edgee, "#469454", latency999.edgee],
                                ['Edge Disabled', latency999.edged, "#D96C2D", latency999.edged],
                            ]}
                            options={{
                                title: '99.9 Percentile Latency in Milliseconds',
                                titlePosition: 'none',
                                chartArea: {left: 60, width: '40%'},
                                hAxis: {
                                    minValue: 0,
                                },
                                backgroundColor: '#FAFAFA',
                                legend: {position: 'none'},
                                vAxis: {
                                    title: 'milliseconds',
                                },
                            }}
                        />
                    </div>
                </div>


            </div>

            <br/>
            See
            <a href="https://blog.upstash.com/edge-caching-benchmark" rel="noreferrer" className="seelink"
               target="_blank">
                the blog post
            </a>
            |
            <a href="https://github.com/upstash/edge-caching-benchmark" rel="noreferrer" className="seelink" target="_blank">
                the source code
            </a>
            <br/>
            {status}
            <hr/>
            <br/>
        </div>
    );
}

export default App;
