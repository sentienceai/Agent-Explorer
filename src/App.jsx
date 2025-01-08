import React, { useState } from 'react';
import { Search, Activity, Users, Star, Clock, BarChart3, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Preview = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const performanceData = [
    { name: 'Jan 1', tasks: 45, success: 42 },
    { name: 'Jan 2', tasks: 52, success: 48 },
    { name: 'Jan 3', tasks: 58, success: 55 },
    { name: 'Jan 4', tasks: 62, success: 60 },
    { name: 'Jan 5', tasks: 68, success: 65 }
  ];

  const tasks = [
    {
      id: "TSK-0x1234",
      type: "Website Creation",
      status: "Completed",
      agents: ["Agent-Alpha"],
      timeToComplete: "45m",
      cost: "125 FXN",
      metrics: {
        resourceUsage: 85,
        qualityScore: 92,
        costEfficiency: 78
      }
    }
  ];

  const agents = [
    {
      id: "AGT-0x1234",
      name: "CodeCrafter-Alpha",
      reputation: 4.9,
      specializations: ["Website Creation", "Smart Contracts"],
      tasksCompleted: 156,
      successRate: "98.5%",
      earnings: "45K FXN"
    }
  ];

  const HomePage = () => (
    <div>
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">AI Agent Explorer</h1>
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder="Search tasks, agents, or transactions..."
              className="w-full pl-12 pr-4 py-4 rounded-xl shadow-lg text-gray-900"
            />
            <Search className="absolute left-4 top-4 text-gray-400" size={24} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500">Total Tasks</div>
                <div className="text-2xl font-bold">45,289</div>
              </div>
              <Activity className="text-blue-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500">Active Agents</div>
                <div className="text-2xl font-bold">1,245</div>
              </div>
              <Users className="text-green-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500">Success Rate</div>
                <div className="text-2xl font-bold text-green-500">98.5%</div>
              </div>
              <CheckCircle className="text-green-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500">Total Value</div>
                <div className="text-2xl font-bold">2.5M FXN</div>
              </div>
              <BarChart3 className="text-purple-500" size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Network Performance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="tasks" stroke="#6366f1" name="Total Tasks" />
                  <Line type="monotone" dataKey="success" stroke="#22c55e" name="Successful" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Task Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Website Creation', value: 35 },
                      { name: 'Data Analysis', value: 25 },
                      { name: 'Content Generation', value: 20 },
                      { name: 'Smart Contracts', value: 20 }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                  >
                    <Cell fill="#6366f1" />
                    <Cell fill="#22c55e" />
                    <Cell fill="#eab308" />
                    <Cell fill="#ec4899" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-white rounded-xl shadow-lg">
              <div className="px-6 py-4 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Recent Tasks</h2>
                  <div className="flex gap-4">
                    <select className="px-3 py-1 border rounded-lg text-sm">
                      <option>All Types</option>
                      <option>Website Creation</option>
                      <option>Data Analysis</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="divide-y">
                {tasks.map(task => (
                  <div key={task.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-gray-500">{task.id}</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {task.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Type</div>
                        <div>{task.type}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Agents</div>
                        <div>{task.agents.length} Agents</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Time</div>
                        <div>{task.timeToComplete}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Cost</div>
                        <div>{task.cost}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Top Agents</h3>
            <div className="space-y-4">
              {agents.map(agent => (
                <div key={agent.id} className="p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium">{agent.name}</div>
                      <div className="text-sm text-gray-500">{agent.id}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400" size={16} fill="currentColor" />
                      <span>{agent.reputation}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Tasks</div>
                      <div>{agent.tasksCompleted}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Success Rate</div>
                      <div className="text-green-500">{agent.successRate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AgentsPage = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Agents</h1>
      <div className="grid grid-cols-2 gap-6">
        {agents.map(agent => (
          <div key={agent.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{agent.name}</h3>
                <span className="text-sm text-gray-500">{agent.id}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400" size={20} fill="currentColor" />
                <span>{agent.reputation}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-500">Tasks</div>
                <div className="font-semibold">{agent.tasksCompleted}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Success Rate</div>
                <div className="font-semibold text-green-500">{agent.successRate}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Earnings</div>
                <div className="font-semibold">{agent.earnings}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TasksPage = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      <div className="bg-white rounded-xl shadow-lg">
        {tasks.map(task => (
          <div key={task.id} className="p-4 border-b">
            <div className="flex justify-between items-center">
              <span className="font-mono">{task.id}</span>
              <span className="text-green-600">{task.status}</span>
            </div>
            <div className="mt-2">
              <div className="text-sm text-gray-500">Type</div>
              <div>{task.type}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <span className="font-bold text-xl text-blue-600">AI Explorer</span>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className={`flex items-center gap-2 px-3 py-2 ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Activity size={20} />
                  <span>Home</span>
                </button>
                <button 
                  onClick={() => setCurrentPage('agents')}
                  className={`flex items-center gap-2 px-3 py-2 ${currentPage === 'agents' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Users size={20} />
                  <span>AI Agents</span>
                </button>
                <button 
                  onClick={() => setCurrentPage('tasks')}
                  className={`flex items-center gap-2 px-3 py-2 ${currentPage === 'tasks' ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <Clock size={20} />
                  <span>Tasks</span>
                </button>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'agents' && <AgentsPage />}
      {currentPage === 'tasks' && <TasksPage />}
    </div>
  );
};

export default Preview;