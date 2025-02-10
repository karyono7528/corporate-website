export interface NewsItem {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  summary: string;
  content: string[];
  category: 'Innovation' | 'Sustainability' | 'Technology' | 'Company News';
  tags: string[];
  readTime: number;
  relatedNewsIds?: string[];
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Breakthrough in Solar Energy Efficiency',
    date: '2024-02-10',
    author: 'Dr. Elena Rodriguez',
    image: '/news/innovation.jpg',
    summary: 'Our research team achieves record-breaking 35% solar panel efficiency, promising a revolution in renewable energy.',
    content: [
      'In a groundbreaking development, our research team has successfully developed a solar panel technology that achieves an unprecedented 35% energy conversion efficiency.',
      'Traditional solar panels typically convert 15-22% of sunlight into electricity. Our new technology represents a massive leap forward in renewable energy capabilities.',
      'The breakthrough comes from a novel multi-junction semiconductor design that captures a broader spectrum of solar radiation.',
      'This innovation could significantly reduce the cost of solar energy production and accelerate global transition to clean energy sources.',
      'Our team is now working on scaling the technology for commercial and industrial applications.'
    ],
    category: 'Innovation',
    tags: ['solar energy', 'renewable technology', 'efficiency'],
    readTime: 5,
    relatedNewsIds: ['3', '4']
  },
  {
    id: '2',
    title: 'Corporate Sustainability Milestone Achievement',
    date: '2024-01-15',
    author: 'Michael Chen, Sustainability Director',
    image: '/news/sustainability.jpg',
    summary: 'Achieving carbon neutrality and setting ambitious environmental goals for the next decade.',
    content: [
      'We are proud to announce that our company has officially achieved carbon neutrality, two years ahead of our original target.',
      'This milestone is the result of comprehensive strategies including renewable energy adoption, carbon offset programs, and radical efficiency improvements.',
      'Key achievements include:',
      '- 100% transition to renewable energy sources',
      '- 50% reduction in corporate carbon emissions',
      '- Implementation of circular economy principles across our operations',
      'Our next goal is to become carbon negative by 2030, demonstrating our commitment to environmental leadership.'
    ],
    category: 'Sustainability',
    tags: ['carbon neutrality', 'environmental goals', 'corporate responsibility'],
    readTime: 4,
    relatedNewsIds: ['1', '4']
  },
  {
    id: '3',
    title: 'Global Renewable Energy Market Transformation',
    date: '2024-03-05',
    author: 'Market Research Team',
    image: '/news/renewable-energy.jpg',
    summary: 'Comprehensive analysis of emerging trends reshaping the global renewable energy landscape.',
    content: [
      'The global renewable energy market is undergoing unprecedented transformation, driven by technological innovations, policy support, and increasing climate awareness.',
      'Key trends identified in our latest market research report include:',
      '1. Rapid decline in renewable energy production costs',
      '2. Increased investment in energy storage technologies',
      '3. Growing corporate commitment to renewable energy',
      '4. Emerging markets leading renewable energy adoption',
      'Our research suggests that renewable energy could account for over 50% of global electricity production by 2035.',
      'This shift represents not just an environmental imperative, but a massive economic opportunity.'
    ],
    category: 'Technology',
    tags: ['market trends', 'renewable energy', 'investment'],
    readTime: 6,
    relatedNewsIds: ['1', '2']
  },
  {
    id: '4',
    title: 'Expanding Renewable Energy Portfolio in Southeast Asia',
    date: '2024-04-20',
    author: 'Corporate Strategy Team',
    image: '/news/renewable-energy.jpg',
    summary: 'Strategic investments driving clean energy transition across Southeast Asian markets.',
    content: [
      'We are excited to announce a major expansion of our renewable energy portfolio across Southeast Asia.',
      'Our strategic investments will focus on:',
      '- Large-scale solar farm development in Indonesia',
      '- Wind energy projects in the Philippines',
      '- Innovative hybrid renewable energy systems in Vietnam',
      'These projects represent an investment of over $500 million and are expected to generate 2 gigawatts of clean energy.',
      'By targeting high-growth markets with significant renewable potential, we are not just investing in energy, but in sustainable economic development.'
    ],
    category: 'Company News',
    tags: ['expansion', 'southeast asia', 'renewable investment'],
    readTime: 5,
    relatedNewsIds: ['2', '3']
  }
];
