import React, { useState, useRef, useEffect } from 'react';

const NFLPlayerRanking = () => {
  const players = [
    //Wide Receivers//
    { firstName: 'Justin', lastName: 'Jefferson', team: 'MIN', color: '#4F2683', logo: 'MIN' },
    { firstName: "Ja'Marr", lastName: 'Chase', team: 'CIN', color: 'black', logo: 'CIN' },
    { firstName: 'A.J.', lastName: 'Brown', team: 'PHI', color: '#004C54', logo: 'PHI' },
    { firstName: 'Ceedee', lastName: 'Lamb', team: 'DAL', color: '#041E42', logo: 'DAL' },
    { firstName: 'Nico', lastName: 'Collins', team: 'HOU', color: '#03202F', logo: 'HOU' },
    { firstName: 'Amon-Ra', lastName: 'St. Brown', team: 'DET', color: '#0076B6', logo: 'DET' },
    { firstName: 'Puka', lastName: 'Nacua', team: 'LAR', color: '#003594', logo: 'LAR' },
    { firstName: 'Tyreek', lastName: 'Hill', team: 'MIA', color: '#008E97', logo: 'MIA' },
    { firstName: 'Mike', lastName: 'Evans', team: 'TB', color: '#D50A0A', logo: 'TB' },
    { firstName: 'Davante', lastName: 'Adams', team: 'LAR', color: '#003594', logo: 'LAR' },
    { firstName: 'Terry', lastName: 'McLaurin', team: 'WAS', color: '#5A1414', logo: 'WAS' },
    { firstName: 'Jaxon', lastName: 'Smith-Njigba', team: 'SEA', color: '#002244', logo: 'SEA' },
    { firstName: 'Malik', lastName: 'Nabers', team: 'NYG', color: '#0B2265', logo: 'NYG' },
    { firstName: 'Brian', lastName: 'Thomas Jr.', team: 'JAX', color: '#006778', logo: 'JAX' },
    { firstName: 'DeVonta', lastName: 'Smith', team: 'PHI', color: '#004C54', logo: 'PHI' },
    { firstName: 'Jerry', lastName: 'Jeudy', team: 'CLE', color: '#311D00', logo: 'CLE' },
    { firstName: 'Chris', lastName: 'Godwin', team: 'TB', color: '#D50A0A', logo: 'TB' },
    { firstName: 'Drake', lastName: 'London', team: 'ATL', color: 'black', logo: 'ATL' },
    { firstName: 'Jayden', lastName: 'Reed', team: 'GB', color: '#203731', logo: 'GB' },
    { firstName: 'D.J.', lastName: 'Moore', team: 'CHI', color: '#0B162A', logo: 'CHI' },
    { firstName: 'Marvin', lastName: 'Harrison Jr.', team: 'ARI', color: '#97233F', logo: 'ARI' },
    { firstName: 'Cooper', lastName: 'Kupp', team: 'SEA', color: '#002244', logo: 'SEA' },
    { firstName: 'Rashee', lastName: 'Rice', team: 'KC', color: '#E31837', logo: 'KC' },
    { firstName: 'Courtland', lastName: 'Sutton', team: 'DEN', color: '#FB4F14', logo: 'DEN' },
    { firstName: 'Ladd', lastName: 'McConkey', team: 'LAC', color: '#0080C6', logo: 'LAC' },
    { firstName: 'Zay', lastName: 'Flowers', team: 'BAL', color: '#241773', logo: 'BAL' },
    { firstName: 'Tee', lastName: 'Higgins', team: 'CIN', color: 'black', logo: 'CIN' },
    { firstName: 'George', lastName: 'Pickens', team: 'PIT', color: '#101820', logo: 'PIT' },
    { firstName: 'D.K.', lastName: 'Metcalf', team: 'PIT', color: '#101820', logo: 'PIT' },
    { firstName: 'Jordan', lastName: 'Addison', team: 'MIN', color: '#4F2683', logo: 'MIN' },
    { firstName: 'Jaylen', lastName: 'Waddle', team: 'MIA', color: '#008E97', logo: 'MIA' },
    { firstName: 'Jameson', lastName: 'Williams', team: 'DET', color: '#0076B6', logo: 'DET' },
    { firstName: 'Garrett', lastName: 'Wilson', team: 'NYJ', color: '#125740', logo: 'NYJ' },
    { firstName: 'Michael', lastName: 'Pittman Jr.', team: 'IND', color: '#002C5F', logo: 'IND' },
    { firstName: 'Chris', lastName: 'Olave', team: 'NO', color: '#101820', logo: 'NO' },
    { firstName: 'Brandon', lastName: 'Aiyuk', team: 'SF', color: '#AA0000', logo: 'SF' },
    { firstName: 'Rashid', lastName: 'Shaheed', team: 'NO', color: '#101820', logo: 'NO' },
    { firstName: 'Jauan', lastName: 'Jennings', team: 'SF', color: '#AA0000', logo: 'SF' },
    { firstName: 'Ricky', lastName: 'Pearsall', team: 'SF', color: '#AA0000', logo: 'SF' },
    { firstName: 'Stefon', lastName: 'Diggs', team: 'NE', color: '#002244', logo: 'NE' },
    { firstName: 'Darnell', lastName: 'Mooney', team: 'ATL', color: 'black', logo: 'ATL' },
    { firstName: 'Rome', lastName: 'Odunze', team: 'CHI', color: '#0B162A', logo: 'CHI' },
    { firstName: 'Rashod', lastName: 'Bateman', team: 'BAL', color: '#241773', logo: 'BAL' },
    { firstName: 'DeAndre', lastName: 'Hopkins', team: 'BAL', color: '#241773', logo: 'BAL' },
    { firstName: 'Marvin', lastName: 'Mims Jr.', team: 'DEN', color: '#FB4F14', logo: 'DEN' },
    { firstName: 'Romeo', lastName: 'Doubs', team: 'GB', color: '#203731', logo: 'GB' },
    { firstName: 'Nick', lastName: 'Westbrook-Ikhine', team: 'MIA', color: '#008E97', logo: 'MIA' },
    { firstName: 'Wandale', lastName: 'Robinson', team: 'NYG', color: '#0B2265', logo: 'NYG' },
    { firstName: 'Christian', lastName: 'Kirk', team: 'HOU', color: '#03202F', logo: 'HOU' },
    { firstName: 'Tank', lastName: 'Dell', team: 'HOU', color: '#03202F', logo: 'HOU' },
    { firstName: 'Jalen', lastName: 'McMillan', team: 'TB', color: '#D50A0A', logo: 'TB' },
    { firstName: 'Deebo', lastName: 'Samuel Sr.', team: 'WAS', color: '#5A1414', logo: 'WAS' },
    { firstName: 'Ladd', lastName: 'McConkey', team: 'LAC', color: '#0080C6', logo: 'LAC' },
    { firstName: 'Mike', lastName: 'Williams', team: 'LAC', color: '#0080C6', logo: 'LAC' },
    { firstName: 'Calvin', lastName: 'Ridley', team: 'TEN', color: '#4B92DB', logo: 'TEN' },
    { firstName: 'DeMario', lastName: 'Douglas', team: 'NE', color: '#002244', logo: 'NE' },
    { firstName: 'Jakobi', lastName: 'Meyers', team: 'LV', color: '#000000', logo: 'LV' },
    { firstName: 'Xavier', lastName: 'Worthy', team: 'KC', color: '#E31837', logo: 'KC' },
    { firstName: 'Adam', lastName: 'Thielen', team: 'CAR', color: '#0085CA', logo: 'CAR' },
    { firstName: 'Jalen', lastName: 'Coker', team: 'CAR', color: '#0085CA', logo: 'CAR' },
    { firstName: 'Xavier', lastName: 'Legette', team: 'CAR', color: '#0085CA', logo: 'CAR' },
    { firstName: 'Adonai', lastName: 'Mitchell', team: 'IND', color: '#002C5F', logo: 'IND' },
    { firstName: 'Alec', lastName: 'Pierce', team: 'IND', color: '#002C5F', logo: 'IND' },
    { firstName: 'Josh', lastName: 'Downs', team: 'IND', color: '#002C5F', logo: 'IND' },
    { firstName: 'Rondale', lastName: 'Moore', team: 'MIN', color: '#4F2683', logo: 'MIN' },
    { firstName: 'Keon', lastName: 'Coleman', team: 'BUF', color: '#00338D', logo: 'BUF' },
    { firstName: 'Khalil', lastName: 'Shakir', team: 'BUF', color: '#00338D', logo: 'BUF' },
   
    //Quarterbacks//
    { firstName: 'Kyler', lastName: 'Murray', team: 'ARI', color: '#97233F', logo: 'ARI' },
    { firstName: 'Michael', lastName: 'Penix Jr.', team: 'ATL', color: 'black', logo: 'ATL' },
    { firstName: 'Lamar', lastName: 'Flowers', team: 'BAL', color: '#241773', logo: 'BAL' },
    { firstName: 'Josh', lastName: 'Allen', team: 'BUF', color: '#00338D', logo: 'BUF' },
    { firstName: 'Bryce', lastName: 'Young', team: 'CAR', color: '#0085CA', logo: 'CAR' },
    { firstName: 'Caleb', lastName: 'Williams', team: 'CHI', color: '#0B162A', logo: 'CHI' },
    { firstName: "Joe", lastName: 'Burrow', team: 'CIN', color: 'black', logo: 'CIN' },
    { firstName: 'Kenny', lastName: 'Pickett', team: 'CLE', color: '#311D00', logo: 'CLE' },
    { firstName: 'Dak', lastName: 'Prescott', team: 'DAL', color: '#041E42', logo: 'DAL' },
    { firstName: 'Bo', lastName: 'Nix', team: 'DEN', color: '#FB4F14', logo: 'DEN' },
    { firstName: 'Jared', lastName: 'Goff', team: 'DET', color: '#0076B6', logo: 'DET' },
    { firstName: 'Jordan', lastName: 'Love', team: 'GB', color: '#203731', logo: 'GB' },
    { firstName: 'C.J.', lastName: 'Stroud', team: 'HOU', color: '#03202F', logo: 'HOU' },
    { firstName: 'Anthony', lastName: 'Richardson', team: 'IND', color: '#002C5F', logo: 'IND' },
    { firstName: 'Trevor', lastName: 'Lawrence', team: 'JAX', color: '#006778', logo: 'JAX' },
    { firstName: 'Patrick', lastName: 'Mahomes', team: 'KC', color: '#E31837', logo: 'KC' },
    { firstName: 'Geno', lastName: 'Smith', team: 'LV', color: '#000000', logo: 'LV' },
    { firstName: 'Justin', lastName: 'Herbert', team: 'LAC', color: '#0080C6', logo: 'LAC' },
    { firstName: 'Matthew', lastName: 'Stafford', team: 'LAR', color: '#003594', logo: 'LAR' },
    { firstName: 'Tua', lastName: 'Tagovailoa', team: 'MIA', color: '#008E97', logo: 'MIA' },
    { firstName: 'J.J.', lastName: 'McCarthy', team: 'MIN', color: '#4F2683', logo: 'MIN' },
    { firstName: 'Drake', lastName: 'Maye', team: 'NE', color: '#002244', logo: 'NE' },
    { firstName: 'Derek', lastName: 'Carr', team: 'NO', color: '#101820', logo: 'NO' },
    { firstName: 'Russell', lastName: 'Wilson', team: 'NYG', color: '#0B2265', logo: 'NYG' },
    { firstName: 'Justin', lastName: 'Fields', team: 'NYJ', color: '#125740', logo: 'NYJ' },
    { firstName: 'Jalen', lastName: 'Hurts', team: 'PHI', color: '#004C54', logo: 'PHI' },
    { firstName: 'Aaron', lastName: 'Rodgers', team: 'PIT', color: '#101820', logo: 'PIT' },
    { firstName: 'Brock', lastName: 'Purdy', team: 'SF', color: '#AA0000', logo: 'SF' },
    { firstName: 'Sam', lastName: 'Darnold', team: 'SEA', color: '#002244', logo: 'SEA' },
    { firstName: 'Baker', lastName: 'Mayfield', team: 'TB', color: '#D50A0A', logo: 'TB' },
    { firstName: 'Cam', lastName: 'Ward', team: 'TEN', color: '#4B92DB', logo: 'TEN' },
    { firstName: 'Jayden', lastName: 'Daniel', team: 'WAS', color: '#5A1414', logo: 'WAS' },

   //Running Backs//
    { firstName: 'James', lastName: 'Conner', team: 'ARI', color: '#97233F', logo: 'ARI' },
    { firstName: 'Bijan', lastName: 'Robinson', team: 'ATL', color: 'black', logo: 'ATL' },
    { firstName: 'Derrek', lastName: 'Henry', team: 'BAL', color: '#241773', logo: 'BAL' },
    { firstName: 'James', lastName: 'Cook', team: 'BUF', color: '#00338D', logo: 'BUF' },
    { firstName: 'Chubba', lastName: 'Hubbard', team: 'CAR', color: '#0085CA', logo: 'CAR' },
    { firstName: 'Rico', lastName: 'Dowdle', team: 'CAR', color: '#0085CA', logo: 'CAR' },
    { firstName: 'D\'Andre', lastName: 'Swift', team: 'CHI', color: '#0B162A', logo: 'CHI' },      { firstName: "Chase", lastName: 'Brown', team: 'CIN', color: 'black', logo: 'CIN' },
    { firstName: 'Jerome', lastName: 'Ford', team: 'CLE', color: '#311D00', logo: 'CLE' },
    { firstName: 'Javonte', lastName: 'Williams', team: 'DAL', color: '#041E42', logo: 'DAL' },      { firstName: 'Jaleel', lastName: 'McLaughlin', team: 'DEN', color: '#FB4F14', logo: 'DEN' },
    { firstName: 'Jahmyr', lastName: 'Gibbs', team: 'DET', color: '#0076B6', logo: 'DET' },
    { firstName: 'David', lastName: 'Montgomery', team: 'DET', color: '#0076B6', logo: 'DET' },
    { firstName: 'Josh', lastName: 'Jacobs', team: 'GB', color: '#203731', logo: 'GB' },
    { firstName: 'Joe', lastName: 'Mixon', team: 'HOU', color: '#03202F', logo: 'HOU' },
    { firstName: 'Jonathan', lastName: 'Taylor', team: 'IND', color: '#002C5F', logo: 'IND' },
    { firstName: 'Travis', lastName: 'Ettienne', team: 'JAX', color: '#006778', logo: 'JAX' },
    { firstName: 'Tank', lastName: 'Bigsby', team: 'JAX', color: '#006778', logo: 'JAX' },
    { firstName: 'Isaiah', lastName: 'Pacheco', team: 'KC', color: '#E31837', logo: 'KC' },
    { firstName: 'Kareem', lastName: 'Hunt', team: 'KC', color: '#E31837', logo: 'KC' },
    { firstName: 'Raheem', lastName: 'Mostert', team: 'LV', color: '#000000', logo: 'LV' },
    { firstName: 'Najee', lastName: 'Harris', team: 'LAC', color: '#0080C6', logo: 'LAC' },
    { firstName: 'Kyren', lastName: 'Williams', team: 'LAR', color: '#003594', logo: 'LAR' },
    { firstName: 'De\'von', lastName: 'Achane', team: 'MIA', color: '#008E97', logo: 'MIA' },
    { firstName: 'Aaron', lastName: 'Jones', team: 'MIN', color: '#4F2683', logo: 'MIN' },
    { firstName: 'Jordan', lastName: 'Mason', team: 'MIN', color: '#4F2683', logo: 'MIN' },
    { firstName: 'Rhamondre', lastName: 'Stevenson', team: 'NE', color: '#002244', logo: 'NE' },
    { firstName: 'Alvin', lastName: 'Kamara', team: 'NO', color: '#101820', logo: 'NO' },
    { firstName: 'Tyrone', lastName: 'Tracy Jr.', team: 'NYG', color: '#0B2265', logo: 'NYG' },
    { firstName: 'Breece', lastName: 'Hall', team: 'NYJ', color: '#125740', logo: 'NYJ' },
    { firstName: 'Braelon', lastName: 'Allen', team: 'NYJ', color: '#125740', logo: 'NYJ' },
    { firstName: 'Saquon', lastName: 'Barkley', team: 'PHI', color: '#004C54', logo: 'PHI' },
    { firstName: 'Jaylen', lastName: 'Warren', team: 'PIT', color: '#101820', logo: 'PIT' },
    { firstName: 'Christian', lastName: 'McCaffret', team: 'SF', color: '#AA0000', logo: 'SF' },
    { firstName: 'Kenneth', lastName: 'Walker III', team: 'SEA', color: '#002244', logo: 'SEA' },
    { firstName: 'Zach', lastName: 'Charbonnet', team: 'SEA', color: '#002244', logo: 'SEA' },
    { firstName: 'Bucky', lastName: 'Irving', team: 'TB', color: '#D50A0A', logo: 'TB' },
    { firstName: 'Rashad', lastName: 'White', team: 'TB', color: '#D50A0A', logo: 'TB' },
    { firstName: 'Tony', lastName: 'Pollard', team: 'TEN', color: '#4B92DB', logo: 'TEN' },
    { firstName: 'Tyjae', lastName: 'Spears', team: 'TEN', color: '#4B92DB', logo: 'TEN' },
    { firstName: 'Brian', lastName: 'Robinson Jr.', team: 'WAS', color: '#5A1414', logo: 'WAS' },
    { firstName: 'Austin', lastName: 'Ekeler', team: 'WAS', color: '#5A1414', logo: 'WAS' },

     //Tight Ends//
     { firstName: 'Trey', lastName: 'McBride', team: 'ARI', color: '#97233F', logo: 'ARI' },
     { firstName: 'Kyle', lastName: 'Pitts', team: 'ATL', color: 'black', logo: 'ATL' },
     { firstName: 'Mark', lastName: 'Andrews', team: 'BAL', color: '#241773', logo: 'BAL' },
     { firstName: 'Isaiah', lastName: 'Likely', team: 'BAL', color: '#241773', logo: 'BAL' },
     { firstName: 'Dawson', lastName: 'Knox', team: 'BUF', color: '#00338D', logo: 'BUF' },
     { firstName: 'Dalton', lastName: 'Kincaid', team: 'BUF', color: '#00338D', logo: 'BUF' },
     { firstName: 'Tommy', lastName: 'Tremble', team: 'CAR', color: '#0085CA', logo: 'CAR' },
     { firstName: 'Cole', lastName: 'Kmet', team: 'CHI', color: '#0B162A', logo: 'CHI' },
     { firstName: 'Mike', lastName: 'Gesicki', team: 'CIN', color: 'black', logo: 'CIN' },
     { firstName: 'David', lastName: 'Njoku', team: 'CLE', color: '#311D00', logo: 'CLE' },
     { firstName: 'Jake', lastName: 'Ferguson', team: 'DAL', color: '#041E42', logo: 'DAL' },
     { firstName: 'Evan', lastName: 'Engram', team: 'DEN', color: '#FB4F14', logo: 'DEN' },
     { firstName: 'Sam', lastName: 'LaPorta', team: 'DET', color: '#0076B6', logo: 'DET' },
     { firstName: 'Trucker', lastName: 'Kraft', team: 'GB', color: '#203731', logo: 'GB' },
     { firstName: 'Dalton', lastName: 'Schultz', team: 'HOU', color: '#03202F', logo: 'HOU' },
     { firstName: 'Drew', lastName: 'Ogletree', team: 'IND', color: '#002C5F', logo: 'IND' },
     { firstName: 'Brenton', lastName: 'Strange', team: 'JAX', color: '#006778', logo: 'JAX' },
     { firstName: 'Travis', lastName: 'Kelce', team: 'KC', color: '#E31837', logo: 'KC' },
     { firstName: 'Brock', lastName: 'Bowers', team: 'LV', color: '#000000', logo: 'LV' },
     { firstName: 'Will', lastName: 'Dissly', team: 'LAC', color: '#0080C6', logo: 'LAC' },
     { firstName: 'Tyler', lastName: 'Higbee', team: 'LAR', color: '#003594', logo: 'LAR' },
     { firstName: 'Jonnu', lastName: 'Smith', team: 'MIA', color: '#008E97', logo: 'MIA' },
     { firstName: 'T.J.', lastName: 'Hockenson', team: 'MIN', color: '#4F2683', logo: 'MIN' },
     { firstName: 'Hunter', lastName: 'Henry', team: 'NE', color: '#002244', logo: 'NE' },
     { firstName: 'Juwan', lastName: 'Johnson', team: 'NO', color: '#101820', logo: 'NO' },
     { firstName: 'Theo', lastName: 'Johnson', team: 'NYG', color: '#0B2265', logo: 'NYG' },
     { firstName: 'Jeremy', lastName: 'Ruckert', team: 'NYJ', color: '#125740', logo: 'NYJ' },
     { firstName: 'Dallas', lastName: 'Goedert', team: 'PHI', color: '#004C54', logo: 'PHI' },
     { firstName: 'Pat', lastName: 'Freiermuth', team: 'PIT', color: '#101820', logo: 'PIT' },
     { firstName: 'George', lastName: 'Kittle', team: 'SF', color: '#AA0000', logo: 'SF' },
     { firstName: 'T.J.', lastName: 'Hockenson', team: 'SEA', color: '#002244', logo: 'SEA' },
     { firstName: 'Cade', lastName: 'Otton', team: 'TB', color: '#D50A0A', logo: 'TB' },
     { firstName: 'Chig', lastName: 'Okonkwo', team: 'TEN', color: '#4B92DB', logo: 'TEN' },
     { firstName: 'Zach', lastName: 'Ertz', team: 'WAS', color: '#5A1414', logo: 'WAS' },      

  ];

  const [selectedPlayers, setSelectedPlayers] = useState(Array(10).fill(null));
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [activeBox, setActiveBox] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [numPlayers, setNumPlayers] = useState(10); // State to toggle between 5 or 10 players
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        activeBox !== null &&
        searchInputRef.current && 
        !searchInputRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setActiveBox(null);
        setShowDropdown(false);
        setSearchTerm('');
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeBox]);

  const toggleInput = (boxIndex) => {
    setActiveBox(boxIndex);
    setShowDropdown(true);
    setSearchTerm('');
  };

  const selectPlayer = (player, boxIndex) => {
    const newSelectedPlayers = [...selectedPlayers];
    newSelectedPlayers[boxIndex] = player;
    setSelectedPlayers(newSelectedPlayers);
    
    setShowDropdown(false);
    setActiveBox(null);
    setSearchTerm('');
  };

  const removePlayer = (boxIndex) => {
    const newSelectedPlayers = [...selectedPlayers];
    newSelectedPlayers[boxIndex] = null;
    setSelectedPlayers(newSelectedPlayers);
  };

  const filteredPlayers = players
    .filter(player => {
      const isAlreadySelected = selectedPlayers.some(
        selectedPlayer => selectedPlayer && 
        selectedPlayer.firstName === player.firstName && 
        selectedPlayer.lastName === player.lastName
      );
      return !isAlreadySelected && 
        (!searchTerm || 
          player.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          player.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    if (e.target.classList.contains('row')) {
      e.target.style.opacity = '0.4';
    }
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    
    const newSelectedPlayers = [...selectedPlayers];
    const draggedItem = newSelectedPlayers[draggedIndex];
    newSelectedPlayers.splice(draggedIndex, 1);
    newSelectedPlayers.splice(index, 0, draggedItem);
    
    if (newSelectedPlayers.length > 10) {
      newSelectedPlayers.length = 10;
    }
    
    setSelectedPlayers(newSelectedPlayers);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = (e) => {
    if (e.target.classList.contains('row')) {
      e.target.style.opacity = '1';
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div 
      className="min-h-screen pt-[100px] pb-10 relative"
      style={{
        backgroundImage: `url('/background.png')`,  // Reference the image under /public/background.png
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#121212'
      }}
    > 
      <div className="container mx-auto px-4">  
        
        {/* Toggle Button for Number of Players */}
        <div className="flex justify-center mb-4">
          <button 
            className="text-center text-white px-6 py-2 rounded-md"
            style={{
              backgroundColor: '#FCAB1E',
              opacity: 0.7,
            }}
            onClick={() => setNumPlayers(numPlayers === 5 ? 10 : 5)} // Toggle between 5 and 10 players
          >
            Show {numPlayers === 5 ? '10' : '5'} Players
          </button>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-center text-[white] mb-8 mt-4">Breakout Candidates</h1>
        
        <div className="w-full max-w-[500px] mx-auto">
          {Array.from({ length: numPlayers }, (_, i) => (
            <div 
              key={i}
              className={`flex items-center mb-2 cursor-move row ${dragOverIndex === i ? 'border-2 border-white' : ''}`}
              draggable={selectedPlayers[i] !== null}
              onDragStart={(e) => handleDragStart(e, i)}
              onDragOver={(e) => handleDragOver(e, i)}
              onDrop={(e) => handleDrop(e, i)}
              onDragEnd={handleDragEnd}
            >
              <div className="flex-shrink-0 w-[75px] h-[75px] bg-[#FCAB1E] text-[#121212] flex items-center justify-center text-4xl font-bold">
                {i + 1}
              </div>
              <div 
                className={`flex-1 h-[75px] border-2 border-white ml-2 mr-2 relative flex items-center ${
                  selectedPlayers[i] ? 'selected' : ''
                }`}
                style={{ 
                  backgroundColor: selectedPlayers[i] ? selectedPlayers[i].color : 'transparent',
                  cursor: selectedPlayers[i] ? 'move' : 'pointer',
                  position: 'relative'
                }}
                onClick={selectedPlayers[i] ? undefined : () => toggleInput(i)}
              >
                {selectedPlayers[i] ? (
                  <div className="flex items-center px-3 w-full">
                    <img 
                      src={`https://static.www.nfl.com/t_q-best/league/api/clubs/logos/${selectedPlayers[i].logo}`}
                      alt={`${selectedPlayers[i].firstName} ${selectedPlayers[i].lastName}`}
                      className="h-[80px] w-auto mr-3 flex-shrink-0"
                    />
                   <div className="text-white font-bold flex flex-col">
                    <div className="text-3xl leading-none">{selectedPlayers[i].firstName.toUpperCase()}</div>
                    <div className="text-3xl leading-none">{selectedPlayers[i].lastName.toUpperCase()}</div>
                  </div>
                    <button 
                      className="absolute top-1 right-1 text-white bg-transparent border-none text-xl cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        removePlayer(i);
                      }}
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <div className="pl-5 text-white">+ Select Player</div>
                )}
                
                {activeBox === i && (
                  <>
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="absolute top-2 left-[5%] w-[90%] p-2 border border-gray-300 rounded-md bg-white text-black z-10"
                      placeholder="Search Player..."
                      autoFocus
                    />
                    
                    {showDropdown && (
                      <div 
                        ref={dropdownRef}
                        className="absolute top-[40px] left-[5%] w-[90%] max-h-[200px] overflow-y-auto border border-gray-300 rounded-md bg-white z-10"
                      >
                        {filteredPlayers.map((player, playerIndex) => (
                          <div 
                            key={playerIndex}
                            className="p-2 hover:bg-gray-100 cursor-pointer text-black"
                            onClick={() => selectPlayer(player, i)}
                          >
                            {player.firstName} {player.lastName}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFLPlayerRanking;
