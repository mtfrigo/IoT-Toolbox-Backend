const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };
const client = new Client(config);

module.exports = {

  async index(req, res) {


    // susbscribe to the topic: 'creditScoreChecker'
    client.subscribe("DecideOnExpansion", async function({ task, taskService }) {
      // Put your business logic
      var north = Math.random() >= 0.5;

      // set a process variable 'winning'
      const processVariables = new Variables();
      processVariables.set("north", north);

      // complete the task
      await taskService.complete(task, processVariables);
    });

    // susbscribe to the topic: 'creditScoreChecker'
    client.subscribe("InvadeGaul", async function({ task, taskService }) {
      // Put your business logic

      console.log("Invade Gaul!!!")

      // complete the task
      await taskService.complete(task);
    });

    // susbscribe to the topic: 'creditScoreChecker'
    client.subscribe("InvadePersia", async function({ task, taskService }) {
      // Put your business logic

      console.log("Invade Persia!!!")

      // complete the task
      await taskService.complete(task);
    });
    
    return res.send({salve: 'salve'})
  },

  

}