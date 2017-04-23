class People{
	constructor(name){
		this.name = name;
	}
    sayhi(id) {
            const tmpl = addrs => `
          <table>
          ${addrs.map(addr => `
            <tr><td><a href="#/home/read/3">${addr.first}</a></td></tr>
            <tr><td><a href="#/test/2">${addr.last}_${id}</a></td></tr>
          `).join('')}
          </table>
        `;
        const data = [
            { first: 'home1', last: 'Bond' },
            { first: 'test', last: 'bbbb' },
        ];

        // let anyObject = new EventClass();

        // anyObject.on("change", (data) => {
        //     console.log("change event :", data);
        // });
        // anyObject.emit("change", "Hello 3778 !");
        return tmpl(data);
    }
}
export default People;