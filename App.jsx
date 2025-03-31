import React, { useState } from 'react';

const learningPlan = [
  {
    week: 'Week 1',
    goal: '理解AI运作原理 + 初识伦理议题',
    tasks: [
      '完成 Elements of AI 第1-3章（预计1.5小时）',
      '观看 Andrew Ng《AI For Everyone》课程前两模块（预计40分钟）',
      '阅读《Weapons of Math Destruction》第1章（预计30分钟）',
      '写一段简短思考：AI目前最关键的伦理问题是什么？（预计20分钟）'
    ]
  },
  {
    week: 'Week 2',
    goal: '学习伦理框架 + 看真实案例',
    tasks: [
      '学习 Microsoft Responsible AI 课程（预计1小时）',
      '阅读并总结：What is Algorithmic Bias?（预计40分钟）',
      '案例分析：Amazon招聘AI、COMPAS司法算法（预计1小时）',
      '制作AI伦理五原则关键词导图（预计30分钟）'
    ]
  },
  {
    week: 'Week 3',
    goal: '动手做一个伦理项目（任选一）',
    tasks: [
      '选定一个AI工具并撰写伦理分析报告（预计3小时）',
      '或复盘一个AI伦理失败案例，输出分析文档（预计3小时）'
    ]
  },
  {
    week: 'Week 4',
    goal: '成果整理 + 反思方向',
    tasks: [
      '整理本月学习材料（预计30分钟）',
      '撰写一篇成果展示文章（预计2小时）',
      '写一段300字的月度总结反思（预计30分钟）'
    ]
  }
];

export default function App() {
  const [checked, setChecked] = useState({});

  const toggleCheck = (week, task) => {
    const key = `${week}-${task}`;
    setChecked(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const totalTasks = learningPlan.reduce((sum, w) => sum + w.tasks.length, 0);
  const completed = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completed / totalTasks) * 100);

  return (
    <div style={{ padding: 16, fontFamily: 'sans-serif' }}>
      <h1>阿杜的 AI 成长计划</h1>
      <p>每日学习时间：晚上 21:00 – 23:00</p>
      <p>当前进度：{completed} / {totalTasks}（{progress}%）</p>
      <div style={{ height: 8, background: '#eee', borderRadius: 4, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ height: 8, width: `${progress}%`, background: '#4a90e2' }} />
      </div>

      {learningPlan.map(({ week, goal, tasks }) => (
        <div key={week} style={{ background: '#f5f5f5', padding: 12, borderRadius: 8, marginBottom: 16 }}>
          <h2>{week}：{goal}</h2>
          <ul style={{ paddingLeft: 16 }}>
            {tasks.map((task, i) => {
              const key = `${week}-${task}`;
              return (
                <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <input
                    type="checkbox"
                    checked={checked[key] || false}
                    onChange={() => toggleCheck(week, task)}
                    style={{ marginRight: 8 }}
                  />
                  <span>{task}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
