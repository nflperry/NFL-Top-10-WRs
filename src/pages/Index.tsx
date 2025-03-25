
import React, { useState, useRef, useEffect } from 'react';

const NFLPlayerRanking = () => {
  const players = [
    { firstName: 'Justin', lastName: 'Jefferson', team: 'MIN', color: '#4F2683', logo: 'MIN' },
    { firstName: "Ja'Marr", lastName: 'Chase', team: 'CIN', color: '#000000', logo: 'CIN' },
    { firstName: 'A.J.', lastName: 'Brown', team: 'PHI', color: '#004C54', logo: 'PHI' },
    { firstName: 'Ceedee', lastName: 'Lamb', team: 'DAL', color: '#041E42', logo: 'DAL' },
    { firstName: 'Tyreek', lastName: 'Hill', team: 'MIA', color: '#008E97', logo: 'MIA' },
    { firstName: 'Nico', lastName: 'Collins', team: 'HOU', color: '#03202F', logo: 'HOU' },
    { firstName: 'Amon-Ra', lastName: 'St. Brown', team: 'DET', color: '#0076B6', logo: 'DET' },
    { firstName: 'Puka', lastName: 'Nacua', team: 'LAR', color: '#003594', logo: 'LAR' },
    { firstName: 'Davante', lastName: 'Adams', team: 'LAR', color: '#003594', logo: 'LAR' },
    { firstName: 'Mike', lastName: 'Evans', team: 'TB', color: '#D50A0A', logo: 'TB' },
    { firstName: 'Chris', lastName: 'Godwin', team: 'TB', color: '#D50A0A', logo: 'TB' },
    { firstName: 'Jaxon', lastName: 'Smith-Njigba', team: 'SEA', color: '#003B5C', logo: 'SEA' },
    { firstName: 'Jerry', lastName: 'Jeudy', team: 'DEN', color: '#002244', logo: 'DEN' },
    { firstName: 'DeVonta', lastName: 'Smith', team: 'PHI', color: '#004C54', logo: 'PHI' },
    { firstName: 'Malik', lastName: 'Nabers', team: 'NYG', color: '#0046A0', logo: 'NYG' },
    { firstName: 'Brian', lastName: 'Thomas Jr.', team: 'JAX', color: '#0046A0', logo: 'JAX' },
    { firstName: 'Terry', lastName: 'McLaurin', team: 'WSH', color: '#773C2F', logo: 'WSH' },
    { firstName: 'Brandon', lastName: 'Aiyuk', team: 'SF', color: '#C5B49A', logo: 'SF' },
    { firstName: 'Jayden', lastName: 'Reed', team: 'GB', color: '#006747', logo: 'GB' },
    { firstName: 'D.J.', lastName: 'Moore', team: 'CHI', color: '#0085CA', logo: 'CHI' },
    { firstName: 'Marvin', lastName: 'Harrison Jr.', team: 'ARI', color: '#F04A6F', logo: 'ARI' },
    { firstName: 'Cooper', lastName: 'Kupp', team: 'SEA', color: '#003594', logo: 'SEA' },
    { firstName: 'Rashee', lastName: 'Rice', team: 'KC', color: '#C80000', logo: 'KC' },
    { firstName: 'Courtland', lastName: 'Sutton', team: 'DEN', color: '#002244', logo: 'DEN' },
    { firstName: 'Ladd', lastName: 'McConkey', team: 'LAC', color: '#9C5B3C', logo: 'LAC' },
    { firstName: 'Zay', lastName: 'Flowers', team: 'BAL', color: '#660000', logo: 'BAL' },
    { firstName: 'Tee', lastName: 'Higgins', team: 'CIN', color: '#000000', logo: 'CIN' },
    { firstName: 'George', lastName: 'Pickens', team: 'PIT', color: '#FFB81C', logo: 'PIT' },
    { firstName: 'D.K.', lastName: 'Metcalf', team: 'SEA', color: '#003B5C', logo: 'SEA' },
    { firstName: 'Jordan', lastName: 'Addison', team: 'MIN', color: '#B2111F', logo: 'MIN' },
    { firstName: 'Jaylen', lastName: 'Waddle', team: 'MIA', color: '#008E97', logo: 'MIA' },
    { firstName: 'Jameson', lastName: 'Williams', team: 'DET', color: '#0076B6', logo: 'DET' },
    { firstName: 'Garrett', lastName: 'Wilson', team: 'NYJ', color: '#1D7A44', logo: 'NYJ' },
    { firstName: 'Michael', lastName: 'Pittman Jr.', team: 'IND', color: '#0067B8', logo: 'IND' },
    { firstName: 'Chris', lastName: 'Olave', team: 'NO', color: '#001E3D', logo: 'NO' },
    { firstName: 'Drake', lastName: 'London', team: 'ATL', color: '#A5ACAF', logo: 'ATL' }
  ];

  const [selectedPlayers, setSelectedPlayers] = useState(Array(10).fill(null));
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [activeBox, setActiveBox] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
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
    setActiveBox(null);
    setShowDropdown(false);
    setSearchTerm('');
  };

  const removePlayer = (boxIndex) => {
    const newSelectedPlayers = [...selectedPlayers];
    newSelectedPlayers[boxIndex] = null;
    setSelectedPlayers(newSelectedPlayers);
  };

  // Filter players based on search term and exclude already selected players
  const filteredPlayers = players
    .filter(player => {
      // Check if the player is already selected
      const isAlreadySelected = selectedPlayers.some(
        selectedPlayer => selectedPlayer && 
        selectedPlayer.firstName === player.firstName && 
        selectedPlayer.lastName === player.lastName
      );
      
      // Only include the player if not already selected and matches search term (if any)
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

  // Modified to shift boxes instead of swapping them
  const handleDrop = (e, index) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === index) return;
    
    const newSelectedPlayers = [...selectedPlayers];
    const draggedItem = newSelectedPlayers[draggedIndex];
    
    // Remove the dragged item first
    newSelectedPlayers.splice(draggedIndex, 1);
    
    // Insert it at the new position
    newSelectedPlayers.splice(index, 0, draggedItem);
    
    // If we have more than 10 items after the move, remove the extra ones
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
    <div className="min-h-screen bg-[#121212] flex justify-center pt-10">
      <div className="w-11/12 max-w-[500px]">
        {Array.from({ length: 10 }, (_, i) => (
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
                    className="h-[60px] w-auto mr-3 flex-shrink-0"
                  />
                  <div className="text-white font-bold flex flex-col">
                    <div className="text-2xl leading-tight">{selectedPlayers[i].firstName.toUpperCase()}</div>
                    <div className="text-2xl leading-tight">{selectedPlayers[i].lastName.toUpperCase()}</div>
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
  );
};

// Export as a standalone component
export default NFLPlayerRanking;
