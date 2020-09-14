<?php


namespace App;

use Illuminate\Database\Eloquent\Model;


/**
 * Class Exercise
 *
 * @mixin Model
 * @package App
 * @property int $id
 * @property int $user_id
 * @property string $assignment_id
 * @property int $hints_available
 * @property int $completed
 * @property int $attempts
 * @property float $time_completed
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise whereAssignmentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise whereAttempts($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise whereCompleted($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise whereHintsAvailable($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise whereTimeCompleted($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Exercise whereUserId($value)
 */
class Exercise extends Model
{
    protected $table = "assignments";

    protected $fillable = [
        'user_id', 'assignment_id', 'hints_available', 'hints_used', 'completed', 'attempts', 'time_completed',
    ];
}
