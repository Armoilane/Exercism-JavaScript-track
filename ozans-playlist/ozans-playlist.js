// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Turns a playlist array into a Set to keep things DRY
 *
 * @param {string[]} playlist
 * @returns {Set}
 */
function toSet(array) {
  const playSet = new Set()
  array.map(track => playSet.add(track))
  return playSet
}

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return [...toSet(playlist)]
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return toSet(playlist).has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  return [...toSet(playlist).add(track)]
}

/**
 * Deletes a track from a playlist.
 * Set.delete() returns boolean so can't return from that
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const playlistSet = toSet(playlist)
  playlistSet.delete(track)
  return [...playlistSet]
}

/**
 * Parses the artist name from a playlist item
 *
 * @param {string} songName
 * @returns {string} artist name
 */
function parseArtist(songName) {
  return songName.split('- ')[1]
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let artistSet = new Set
  playlist.map(song => artistSet.add(parseArtist(song)))
  return [...artistSet]
}
